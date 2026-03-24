'use client';

import { useEffect, useRef } from 'react';

/**
 * Mouse-interactive morphing gradient background.
 * The "interactive" blob smoothly follows the cursor.
 */
export default function HeroMorphing() {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const cur = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialise target to center of screen
    tgt.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cur.current = { ...tgt.current };

    function onMove(e: MouseEvent) {
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;
    }

    function tick() {
      // Smooth lerp: 20-frame lag for silky follow
      cur.current.x += (tgt.current.x - cur.current.x) / 20;
      cur.current.y += (tgt.current.y - cur.current.y) / 20;

      if (interactiveRef.current) {
        interactiveRef.current.style.transform =
          `translate(${Math.round(cur.current.x)}px, ${Math.round(cur.current.y)}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="morphing-gradients-bg">
      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
        {/* This blob follows the mouse */}
        <div className="interactive" ref={interactiveRef} />
      </div>
    </div>
  );
}
