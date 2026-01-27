import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface PaymentRequest {
    name: string;
    phone: string;
    email: string;
    selectedDate: string;
    amount: number;
}

interface YuKassaPayment {
    id: string;
    status: string;
    confirmation: {
        type: string;
        confirmation_url: string;
    };
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    // CORS headers
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json",
    };

    // Handle preflight
    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 204, headers, body: "" };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    try {
        const { name, phone, email, selectedDate, amount } = JSON.parse(
            event.body || "{}"
        ) as PaymentRequest;

        // Validate required fields
        if (!name || !phone || !email || !selectedDate || !amount) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        const shopId = process.env.YUKASSA_SHOP_ID;
        const secretKey = process.env.YUKASSA_SECRET_KEY;

        if (!shopId || !secretKey) {
            console.error("YuKassa credentials not configured");
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: "Payment system not configured" }),
            };
        }

        // Generate idempotence key for safe retries
        const idempotenceKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

        // Get the site URL for return URLs
        const siteUrl = process.env.URL || "https://sofirumi.ru";

        // Create payment in YuKassa
        const paymentResponse = await fetch("https://api.yookassa.ru/v3/payments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Idempotence-Key": idempotenceKey,
                Authorization: `Basic ${Buffer.from(`${shopId}:${secretKey}`).toString("base64")}`,
            },
            body: JSON.stringify({
                amount: {
                    value: amount.toFixed(2),
                    currency: "RUB",
                },
                capture: true,
                confirmation: {
                    type: "redirect",
                    return_url: `${siteUrl}/payment-success.html`,
                },
                description: `Ретрит "Возрождение" - ${selectedDate}`,
                metadata: {
                    customer_name: name,
                    customer_phone: phone,
                    customer_email: email,
                    retreat_date: selectedDate,
                },
                receipt: {
                    customer: {
                        email: email,
                        phone: phone.replace(/[^0-9+]/g, ""),
                    },
                    items: [
                        {
                            description: `Ретрит "Возрождение" (${selectedDate})`,
                            quantity: "1.00",
                            amount: {
                                value: amount.toFixed(2),
                                currency: "RUB",
                            },
                            vat_code: 1,
                            payment_subject: "service",
                            payment_mode: "full_prepayment",
                        },
                    ],
                },
            }),
        });

        if (!paymentResponse.ok) {
            const errorData = await paymentResponse.text();
            console.error("YuKassa API error:", errorData);
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: "Payment creation failed" }),
            };
        }

        const paymentData = (await paymentResponse.json()) as YuKassaPayment;

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                paymentId: paymentData.id,
                confirmationUrl: paymentData.confirmation.confirmation_url,
            }),
        };
    } catch (error) {
        console.error("Payment handler error:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Internal server error" }),
        };
    }
};

export { handler };
