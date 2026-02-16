'use client';

import React, { useEffect, useRef } from 'react';

export function AntigravitySparks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 60 : 180;
    
    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const newCount = window.innerWidth < 768 ? 60 : 180;
      if (particles.length !== newCount) {
        initParticles(newCount);
      }
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      baseX: number = 0;
      baseY: number = 0;
      angle: number = Math.random() * Math.PI * 2;
      radius: number = 60 + Math.random() * 200;
      speed: number = 0.002 + Math.random() * 0.004;
      size: number = Math.random() * 2 + 1;
      color: string;

      constructor() {
        const colors = ['#6366f1', '#818cf8', '#a855f7', '#c084fc', '#ec4899'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseX = Math.random() * canvas!.width;
        this.baseY = Math.random() * canvas!.height;
      }

      update() {
        this.angle += this.speed;
        
        const targetX = (mouse.current.active ? mouse.current.x : canvas!.width / 2) + Math.cos(this.angle) * this.radius;
        const targetY = (mouse.current.active ? mouse.current.y : canvas!.height / 2) + Math.sin(this.angle) * this.radius;

        // Snappier movement
        this.x += (targetX - this.x) * 0.15;
        this.y += (targetY - this.y) * 0.15;
      }

      draw() {
        if (!ctx) return;
        
        // Draw as a "spark"
        const length = 5;
        const x2 = this.x + Math.cos(this.angle) * length;
        const y2 = this.y + Math.sin(this.angle) * length;
        
        ctx.beginPath();
        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    const initParticles = (count: number) => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
        mouse.current.active = true;
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchmove', handleTouch);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[5]"
      style={{ filter: 'contrast(1.1)' }}
    />
  );
}

