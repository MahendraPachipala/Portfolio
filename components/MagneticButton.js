"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const MagneticButton = ({ children }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;

    gsap.to(buttonRef.current, {
      x,
      y,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "elastic.out(1.2, 0.4)",
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="px-6 py-3 bg-purple-500 text-white font-bold rounded-full shadow-lg transition-transform"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
