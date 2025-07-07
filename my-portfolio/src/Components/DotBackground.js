import React, { useRef, useEffect, useState } from 'react';

export default function DotBackground() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let mouse = { x: null, y: null };
    const nodeCount = 400;
    const nodes = [];

    // Initialize node data
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: (Math.random() + 1) * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      for (let node of nodes) {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x < 0 || node.x > dimensions.width) node.dx *= -1;
        if (node.y < 0 || node.y > dimensions.height) node.dy *= -1;

        const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (dist < 80) {
          const angle = Math.atan2(node.y - mouse.y, node.x - mouse.x);
          node.x += Math.cos(angle);
          node.y += Math.sin(angle);
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'grey';
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
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
