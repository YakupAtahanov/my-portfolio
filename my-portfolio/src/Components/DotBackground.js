// src/Components/DotBackground.js

import React, { useRef, useEffect } from 'react';

export default function DotBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null };
    const nodeCount = 50;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: (Math.random() + 1) * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let node of nodes) {
        // Move nodes
        node.x += node.dx;
        node.y += node.dy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.dx *= -1;
        if (node.y < 0 || node.y > height) node.dy *= -1;

        // Repel from mouse
        const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (dist < 80) {
          const angle = Math.atan2(node.y - mouse.y, node.x - mouse.x);
          node.x += Math.cos(angle) * 1;
          node.y += Math.sin(angle) * 1;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
