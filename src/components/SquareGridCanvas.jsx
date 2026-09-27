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

    const activateSquare = (col, row, initialOpacity = 1.0, isPrimary = false) => {
      const key = `${col},${row}`;
      const existing = activeSquares.get(key);
      const newOpacity = existing ? Math.max(existing.opacity, initialOpacity) : initialOpacity;
      activeSquares.set(key, { 
        col, 
        row, 
        opacity: newOpacity, 
        isPrimary: isPrimary || existing?.isPrimary || false 
      });
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > width || y < 0 || y > height) return;

      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);

      // Primary square - radiant champagne gold
      activateSquare(col, row, 0.9, true);

      // Neighbor squares - warm amber halo
      activateSquare(col + 1, row, 0.35, false);
      activateSquare(col - 1, row, 0.35, false);
      activateSquare(col, row + 1, 0.35, false);
      activateSquare(col, row - 1, 0.35, false);
    };

    const parent = canvas.parentElement?.parentElement || canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    // Ambient random sparkle timer
    let lastAmbientTime = Date.now();
    let lastPulseStepTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Continuous automatic gliding glow (gentle phantom pulse across grid)
      if (now - lastPulseStepTime > 120 && width > 0 && height > 0) {
        lastPulseStepTime = now;
        
        // Auto pulse 1: smooth sweeping lissajous motion
        const aX1 = (Math.sin(now * 0.0006) * 0.42 + 0.5) * width;
        const aY1 = (Math.cos(now * 0.0008) * 0.38 + 0.5) * height;
        const col1 = Math.floor(aX1 / cellSize);
        const row1 = Math.floor(aY1 / cellSize);
        activateSquare(col1, row1, 0.7, true);
        activateSquare(col1 + 1, row1, 0.3, false);
        activateSquare(col1 - 1, row1, 0.3, false);
        activateSquare(col1, row1 + 1, 0.3, false);
        activateSquare(col1, row1 - 1, 0.3, false);

        // Auto pulse 2: diagonal wave
        const aX2 = (Math.cos(now * 0.00045 + 1.8) * 0.4 + 0.5) * width;
        const aY2 = (Math.sin(now * 0.0007 + 2.2) * 0.35 + 0.5) * height;
        const col2 = Math.floor(aX2 / cellSize);
        const row2 = Math.floor(aY2 / cellSize);
        activateSquare(col2, row2, 0.65, true);
        activateSquare(col2 + 1, row2, 0.25, false);
        activateSquare(col2, row2 + 1, 0.25, false);
      }

      // Periodic random ambient square clusters
      if (now - lastAmbientTime > 450 && width > 0 && height > 0) {
        lastAmbientTime = now;
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);
        const randomCol = Math.floor(Math.random() * cols);
        const randomRow = Math.floor(Math.random() * rows);
        activateSquare(randomCol, randomRow, 0.8, true);
        
        // 50% chance of lighting up an adjacent neighbor
        if (Math.random() > 0.5) {
          const offsetCol = Math.random() > 0.5 ? 1 : -1;
          activateSquare(randomCol + offsetCol, randomRow, 0.35, false);
        }
      }

      // Draw base subtle grid with cool cyber cyan tint
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
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

      // Render & decay active square lines with Electric Cyan & Royal Sapphire palette
      for (const [key, sq] of activeSquares.entries()) {
        const x = sq.col * cellSize;
        const y = sq.row * cellSize;

        if (sq.isPrimary) {
          // Primary square: Electric Cyan with Royal Sapphire bloom
          ctx.save();
          ctx.shadowColor = `rgba(37, 99, 235, ${sq.opacity * 0.75})`;
          ctx.shadowBlur = 8;
          ctx.strokeStyle = `rgba(56, 189, 248, ${sq.opacity * 0.95})`;
          ctx.lineWidth = 1.25;
          ctx.strokeRect(x, y, cellSize, cellSize);

          // Subtle corner micro-sparkles in ice white-cyan
          ctx.fillStyle = `rgba(224, 242, 254, ${sq.opacity * 0.9})`;
          ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          ctx.fillRect(x + cellSize - 0.75, y - 0.75, 1.5, 1.5);
          ctx.fillRect(x - 0.75, y + cellSize - 0.75, 1.5, 1.5);
          ctx.fillRect(x + cellSize - 0.75, y + cellSize - 0.75, 1.5, 1.5);
          ctx.restore();
        } else {
          // Neighbor squares: Royal Sapphire
          ctx.strokeStyle = `rgba(37, 99, 235, ${sq.opacity * 0.75})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, cellSize, cellSize);
        }

        // Decay opacity smoothly
        sq.opacity *= 0.91;
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
