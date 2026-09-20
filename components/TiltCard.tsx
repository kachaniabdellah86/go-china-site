"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
};

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const spring = { stiffness: 260, damping: 24 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]), spring);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]), spring);
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), spring);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), spring);
  const glareOpacity = useSpring(hover, { stiffness: 200, damping: 30 });
  const glareBackground = useMotionTemplate`radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 78%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
    hover.set(1);
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    hover.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1100 }
      }
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && !reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBackground, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  );
}
