"use client";
import { useEffect, useRef, useCallback } from "react";
import { gsap, Expo } from "gsap";
import play from "../public/play.svg";
import Image from "next/image";

function useInstance(value = {}) {
  const ref = useRef(null);
  if (!ref.current) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

function getScale(diffX, diffY) {
  const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
  return Math.min(distance / 735, 0.35);
}

function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

const CustomCursor = ({ component }) => {
  const jellyRef = useRef(null);

  const pos = useInstance(() => {
    if (typeof window !== "undefined") {
      return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }
    return { x: 0, y: 0 }; // Default values for SSR
  });
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent running on server

    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.width = gsap.quickSetter(jellyRef.current, "width", "px");
    set.opacity = gsap.quickSetter(jellyRef.current, "opacity");
  }, []);

  const loop = useCallback(() => {
    const rotation = getAngle(vel.x, vel.y);
    const scale = getScale(vel.x, vel.y);
    set.x(pos.x);
    set.y(pos.y);
    set.width(100 + scale * 150);
    set.r(rotation);
    set.sx(1 + scale);
    set.sy(1 - scale);
  }, [pos.x, pos.y, vel.x, vel.y]);

  useEffect(() => {
    const setFromEvent = (e) => {
      clearTimeout(timeoutRef.current);
      gsap.to(jellyRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      const x =
        e.clientX -
        (component === "video" || component === "Name" ? 34 : 10);
      const y =
        e.clientY -
        (component === "video" || component === "Name" ? 35 : 10);

      gsap.to(pos, {
        x,
        y,
        duration: 1.25,
        ease: Expo.easeOut,
        onUpdate: () => {
          vel.x = x - pos.x;
          vel.y = y - pos.y;
          loop();
        },
        onComplete: () => {
          gsap.to(jellyRef.current, {
            scaleX: 1,
            scaleY: 1,
            width: 100,
            rotate: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    };

    const hideCursor = () => {
      timeoutRef.current = setTimeout(() => {
        gsap.to(jellyRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }, 300);
    };

    window.addEventListener("mousemove", setFromEvent);
    window.addEventListener("mouseleave", hideCursor);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [loop, component]);

  

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none  z-50  ${
        component === null || component === "Name" ? "mix-blend-difference" : ""
      }`}
    >
      <div
        ref={jellyRef}
        className={`fixed flex bg-white items-center justify-center rounded-full will-change-transform bg-transparent 
        transition-all duration-300 ease-out 
        ${component === null ? "!w-[25px] !h-[25px]" : ""}
        ${component === "Name" ? "!w-[70px] !h-[70px]" : ""}
        ${component === "video" ? "!w-[100px] !h-[100px] !bg-white" : ""}
        ${component === "videoview" ? "!w-[100px] !h-[100px] !bg-black !text-white" : ""}
        
`}
        style={{ opacity: 0 }}
      >
        {component === "video" && (
          <Image className="h-4" src={play} alt="play" />
        )}
        {component === 'videoview' && (
  <p className="text-white text-4xl font-slim relative z-50">X</p>
)}
      </div>
      


    </div>
  );
};

export default CustomCursor;
