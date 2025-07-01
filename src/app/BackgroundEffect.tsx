"use client";
import React, { useRef, useEffect } from "react";

const STAR_COUNT = 350;
const GALAXY_RADIUS = 420;
const ARMS = 5;
const ARM_SPREAD = 0.6;
const ROTATION_SPEED = 0.0007;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createStar(cx: number, cy: number, w: number, h: number) {
  // Spiral galaxy math
  const arm = Math.floor(Math.random() * ARMS);
  const angle = (arm / ARMS) * 2 * Math.PI + randomBetween(-ARM_SPREAD, ARM_SPREAD);
  const radius = Math.pow(Math.random(), 2.2) * GALAXY_RADIUS;
  const spiral = angle + radius * 0.045;
  const x = cx + Math.cos(spiral) * radius + randomBetween(-8, 8);
  const y = cy + Math.sin(spiral) * radius + randomBetween(-8, 8);
  const size = randomBetween(0.5, 2.2);
  const color = `hsla(${randomBetween(180, 260)}, 100%, ${randomBetween(80, 100)}%, ${randomBetween(0.5, 1)})`;
  return { x, y, size, color, angle: spiral, radius, arm };
}

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);
  const animationRef = useRef<number>();
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    function generateStars() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      starsRef.current = Array.from({ length: STAR_COUNT }, () => createStar(cx, cy, canvas.width, canvas.height));
    }
    generateStars();
    window.addEventListener("resize", generateStars);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Galaxy core glow
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, GALAXY_RADIUS * 0.7);
      grad.addColorStop(0, "#fff");
      grad.addColorStop(0.2, "#b5eaff");
      grad.addColorStop(0.4, "#2c5364");
      grad.addColorStop(1, "#0f2027");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate rotation
      rotationRef.current += ROTATION_SPEED + mouseX * 0.0015;

      // Draw stars
      for (const star of starsRef.current) {
        // Spiral rotation
        const rot = star.angle + rotationRef.current + star.arm * 0.2 + mouseY * 0.2;
        const x = cx + Math.cos(rot) * star.radius;
        const y = cy + Math.sin(rot) * star.radius;
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", generateStars);
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#0f2027"
      }}
    />
  );
}
