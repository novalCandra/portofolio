"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        setTimeout(() => setLoading(false), 2000);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground"
        >
          <div className="flex flex-col items-center gap-6 px-4 text-center">
            <div className="relative">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-5xl md:text-7xl font-bold tracking-tighter"
              >
                Novel<span className="bg-linear-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">Candra</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-sky-400 to-purple-500 rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-[0.3em]">
                Loading Experience
              </p>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: i * 0.2,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-sky-400"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
