"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollDownIcon = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  });
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold group-hover:text-orange-500 transition-colors">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent relative overflow-hidden">
            <motion.div
              animate={{
                y: [-48, 48]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDownIcon;
