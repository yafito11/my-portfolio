"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Posisi asli kursor (tanpa delay)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Posisi roket (dengan efek spring / delay)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rocketX = useSpring(cursorX, springConfig);
  const rocketY = useSpring(cursorY, springConfig);

  // Rotasi roket
  const rotateAngle = useMotionValue(-45); // Default rotasi
  const smoothRotation = useSpring(rotateAngle, { damping: 20, stiffness: 150 });

  useEffect(() => {
    // Pastikan ini hanya berjalan di klien dan bukan layar sentuh
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let previousX = -100;
    let previousY = -100;

    const moveCursor = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      // Kalkulasi sudut pergerakan roket
      if (previousX !== -100 && previousY !== -100) {
        const deltaX = currentX - previousX;
        const deltaY = currentY - previousY;
        
        // Hanya update sudut jika mouse bergerak cukup signifikan
        if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
          // Menghitung sudut dalam radians lalu mengubah ke derajat
          // atan2(y, x) memberikan arah yang tepat. 
          // Ditambah 45 derajat (Math.PI / 4) offset karena svg panah aslinya serong 45 derajat (ke kanan atas).
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 45;
          rotateAngle.set(angle);
        }
      }

      previousX = currentX;
      previousY = currentY;

      cursorX.set(currentX - 16); // offset untuk center
      cursorY.set(currentY - 16); 
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible, rotateAngle]);

  if (!isVisible) return null;

  return (
    <>
      {/* Kursor Titik Utama (AI Core) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]" />
      </motion.div>

      {/* Roket yang Mengikuti (Follower) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[99] flex items-center justify-center text-primary"
        style={{
          x: rocketX,
          y: rocketY,
          rotate: smoothRotation, 
        }}
      >
        <Rocket size={24} className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute -bottom-2 -left-2 text-yellow-400"
        >
          <Sparkles size={12} />
        </motion.div>
      </motion.div>

      {/* Sembunyikan Kursor Default */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
