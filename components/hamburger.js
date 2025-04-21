"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);


  const scrollToNextSection = (section) => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth" });
    
  };

  return (
    <div className="fixed top-6 right-10 z-50 mix-blend-difference">
      {/* Hamburger Icon */}
      <div
      className="fixed top-6 right-10 w-10 h-10 flex items-center justify-center cursor-pointer z-50 mix-blend-difference"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* First Line */}
      <span
        className={`absolute h-1 w-10 bg-white transition-transform duration-300 
          ${isOpen ? "upperline" : "close-upperline"}`}
      />
      
      {/* Second Line */}
      <span
        className={`absolute h-1 w-10 bg-white transition-transform duration-300 
          ${isOpen ? "lowerline" : "close-lowerline"}`}
      />
    </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-4 bg-gray-900 bg-opacity-90 text-white rounded-lg shadow-lg p-5 w-48"
          >
            <ul className="flex flex-col space-y-4">
              {["Home", "Tech Stack", "Projects", "Contact"].map((item) => (
                <li key={item} className="">
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block hover:text-blue-400 transition"
                    onClick={() => scrollToNextSection(item.toLowerCase().replace(" ", "-"))}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
