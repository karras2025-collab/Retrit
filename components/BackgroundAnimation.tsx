import React, { useEffect, useRef } from 'react';

export const BackgroundAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Gold color with transparency
        const goldColor = 'rgba(212, 175, 55, ';

        // Stars (sparkles in star shape)
        interface Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            fadeSpeed: number;
            growing: boolean;
            rotation: number;
        }

        const stars: Star[] = [];
        const maxStars = 80;

        const createStar = (): Star => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 2,
            opacity: 0,
            fadeSpeed: Math.random() * 0.015 + 0.008,
            growing: true,
            rotation: Math.random() * Math.PI * 2
        });

        for (let i = 0; i < maxStars; i++) {
            const star = createStar();
            star.opacity = Math.random() * 0.3;
            stars.push(star);
        }

        // Draw star shape
        const drawStar = (x: number, y: number, size: number, opacity: number, rotation: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            // Draw 4-pointed star
            ctx.beginPath();
            const spikes = 4;
            const outerRadius = size;
            const innerRadius = size * 0.4;

            for (let i = 0; i < spikes * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (i * Math.PI) / spikes;
                const px = Math.cos(angle) * radius;
                const py = Math.sin(angle) * radius;

                if (i === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }
            ctx.closePath();
            ctx.fillStyle = goldColor + opacity + ')';
            ctx.fill();

            // Draw glow
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
            gradient.addColorStop(0, goldColor + (opacity * 0.6) + ')');
            gradient.addColorStop(1, goldColor + '0)');
            ctx.beginPath();
            ctx.arc(0, 0, size * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.restore();
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update stars
            stars.forEach((star, index) => {
                // Update opacity
                if (star.growing) {
                    star.opacity += star.fadeSpeed;
                    if (star.opacity >= 0.4) {
                        star.growing = false;
                    }
                } else {
                    star.opacity -= star.fadeSpeed;
                    if (star.opacity <= 0) {
                        stars[index] = createStar();
                    }
                }

                // Slowly rotate
                star.rotation += 0.01;

                // Draw star
                drawStar(star.x, star.y, star.size, star.opacity, star.rotation);
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Update canvas height on scroll (for dynamic content)
        const updateHeight = () => {
            if (canvas.height !== document.documentElement.scrollHeight) {
                canvas.height = document.documentElement.scrollHeight;
            }
        };
        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(document.body);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ top: 0, left: 0 }}
        />
    );
};
