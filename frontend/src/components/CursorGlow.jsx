import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const spring = { stiffness: 260, damping: 34, mass: 0.35 };

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setEnabled(!mediaQuery.matches);

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#79A1FF]/25 blur-3xl"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5BE6C9]/25 blur-2xl"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}