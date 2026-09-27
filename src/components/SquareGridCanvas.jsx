import { useEffect, useRef } from 'react';

export default function SquareGridCanvas({ cellSize = 45 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Map of active squares: key = "col,row", value = { col, row, opacity, color }
    const activeSquares = new Map();

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const activateSquare = (col, row, initialOpacity = 1.0) => {
      const key = `${col},${row}`;
      const existing = activeSquares.get(key);
      const newOpacity = existing ? Math.max(existing.opacity, initialOpacity) : initialOpacity;
      activeSquares.set(key, { col, row, opacity: newOpacity });
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > width || y < 0 || y > height) return;

      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);

      // Primary square - medium strength
      activateSquare(col, row, 0.85);

      // Subtle neighbor glow
      activateSquare(col + 1, row, 0.25);
      activateSquare(col - 1, row, 0.25);
      activateSquare(col, row + 1, 0.25);
      activateSquare(col, row - 1, 0.25);
    };

    const parent = canvas.parentElement?.parentElement || canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    // Ambient random sparkle timer
    let lastAmbientTime = Date.now();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      if (now - lastAmbientTime > 1000) {
        lastAmbientTime = now;
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);
        const randomCol = Math.floor(Math.random() * cols);
        const randomRow = Math.floor(Math.random() * rows);
        activateSquare(randomCol, randomRow, 0.3);
      }

      // Draw base subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = c * cellSize;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let r = 0; r <= rows; r++) {
        const y = r * cellSize;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render & decay active square lines only (medium glowing lines)
      for (const [key, sq] of activeSquares.entries()) {
        const x = sq.col * cellSize;
        const y = sq.row * cellSize;

        // Clean golden glowing line border
        ctx.strokeStyle = `rgba(250, 204, 21, ${sq.opacity * 0.85})`;
        ctx.lineWidth = 1.2;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Decay opacity smoothly
        sq.opacity *= 0.92;
        if (sq.opacity < 0.015) {
          activeSquares.delete(key);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [cellSize]);

  return (
    <canvas
      ref={canvasRef}
      className="hero__grid-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 85%)',
      }}
    />
  );
}
