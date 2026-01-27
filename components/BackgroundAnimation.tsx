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

        // Sparkles
        interface Sparkle {
            x: number;
            y: number;
            size: number;
            opacity: number;
            fadeSpeed: number;
            growing: boolean;
        }

        const sparkles: Sparkle[] = [];
        const maxSparkles = 30;

        const createSparkle = (): Sparkle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            opacity: 0,
            fadeSpeed: Math.random() * 0.01 + 0.005,
            growing: true
        });

        for (let i = 0; i < maxSparkles; i++) {
            const sparkle = createSparkle();
            sparkle.opacity = Math.random() * 0.15;
            sparkles.push(sparkle);
        }

        // Threads (thin golden lines)
        interface Thread {
            startX: number;
            startY: number;
            endX: number;
            endY: number;
            opacity: number;
            fadeSpeed: number;
            growing: boolean;
        }

        const threads: Thread[] = [];
        const maxThreads = 8;

        const createThread = (): Thread => {
            const horizontal = Math.random() > 0.5;
            if (horizontal) {
                const y = Math.random() * canvas.height;
                return {
                    startX: 0,
                    startY: y,
                    endX: canvas.width,
                    endY: y + (Math.random() - 0.5) * 100,
                    opacity: 0,
                    fadeSpeed: Math.random() * 0.003 + 0.001,
                    growing: true
                };
            } else {
                const x = Math.random() * canvas.width;
                return {
                    startX: x,
                    startY: 0,
                    endX: x + (Math.random() - 0.5) * 100,
                    endY: canvas.height,
                    opacity: 0,
                    fadeSpeed: Math.random() * 0.003 + 0.001,
                    growing: true
                };
            }
        };

        for (let i = 0; i < maxThreads; i++) {
            const thread = createThread();
            thread.opacity = Math.random() * 0.08;
            threads.push(thread);
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update sparkles
            sparkles.forEach((sparkle, index) => {
                // Update opacity
                if (sparkle.growing) {
                    sparkle.opacity += sparkle.fadeSpeed;
                    if (sparkle.opacity >= 0.2) {
                        sparkle.growing = false;
                    }
                } else {
                    sparkle.opacity -= sparkle.fadeSpeed;
                    if (sparkle.opacity <= 0) {
                        sparkles[index] = createSparkle();
                    }
                }

                // Draw sparkle
                ctx.beginPath();
                ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
                ctx.fillStyle = goldColor + sparkle.opacity + ')';
                ctx.fill();

                // Draw glow
                const gradient = ctx.createRadialGradient(
                    sparkle.x, sparkle.y, 0,
                    sparkle.x, sparkle.y, sparkle.size * 4
                );
                gradient.addColorStop(0, goldColor + (sparkle.opacity * 0.5) + ')');
                gradient.addColorStop(1, goldColor + '0)');
                ctx.beginPath();
                ctx.arc(sparkle.x, sparkle.y, sparkle.size * 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            // Draw and update threads
            threads.forEach((thread, index) => {
                // Update opacity
                if (thread.growing) {
                    thread.opacity += thread.fadeSpeed;
                    if (thread.opacity >= 0.1) {
                        thread.growing = false;
                    }
                } else {
                    thread.opacity -= thread.fadeSpeed;
                    if (thread.opacity <= 0) {
                        threads[index] = createThread();
                    }
                }

                // Draw thread
                ctx.beginPath();
                ctx.moveTo(thread.startX, thread.startY);
                ctx.lineTo(thread.endX, thread.endY);
                ctx.strokeStyle = goldColor + thread.opacity + ')';
                ctx.lineWidth = 1;
                ctx.stroke();
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
