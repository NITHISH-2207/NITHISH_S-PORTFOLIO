import React, { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Muted, premium slow particles (Subtle Gold Specs)
    const particlesArray = [];
    const numberOfParticles = 10; // Extremely low density to preserve clean typography readability

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 0.8 + 0.3; // Tiny dust specs
        this.speedX = Math.random() * 0.04 - 0.02;
        this.speedY = Math.random() * -0.08 - 0.02; // Slow upward drift
        this.color = `rgba(184, 150, 46, ${Math.random() * 0.18 + 0.06})`; // Subtle Gold specs
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around borders
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0 || this.x > width) {
          this.x = Math.random() * width;
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Ambient background blurs (navy & gold, extremely blurred, slow-moving)
    const blobs = [
      {
        x: width * 0.15,
        y: height * 0.2,
        radius: Math.min(width, height) * 0.65,
        vx: 0.04,
        vy: 0.02,
        colorLight: 'rgba(21, 40, 73, 0.04)' // Muted Navy Blur (#152849)
      },
      {
        x: width * 0.85,
        y: height * 0.85,
        radius: Math.min(width, height) * 0.7,
        vx: -0.03,
        vy: -0.04,
        colorLight: 'rgba(184, 150, 46, 0.03)' // Muted Gold Blur (#B8962E)
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: Math.min(width, height) * 0.5,
        vx: 0.02,
        vy: -0.03,
        colorLight: 'rgba(234, 228, 214, 0.45)' // Soft Beige Backplane Highlight (#EAE4D6)
      }
    ];

    const drawBlob = (blob) => {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius
      );
      
      gradient.addColorStop(0, blob.colorLight);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = gradient;
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateBlobs = () => {
      blobs.forEach(blob => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce borders
        if (blob.x - blob.radius < 0 || blob.x + blob.radius > width) {
          blob.vx *= -1;
        }
        if (blob.y - blob.radius < 0 || blob.y + blob.radius > height) {
          blob.vy *= -1;
        }
      });
    };

    // Main render loop
    const animate = () => {
      // Background base fill (Warm Ivory)
      ctx.fillStyle = '#F5F0E6';
      ctx.fillRect(0, 0, width, height);

      // Draw background ambient color shapes
      updateBlobs();
      blobs.forEach(drawBlob);

      // Draw & Update calm dust particles
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-50"
    />
  );
}
