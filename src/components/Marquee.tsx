"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const words = [
    "GENERATIVE AI",
    "✦",
    "AGENTIC WORKFLOW",
    "✦",
    "RAG SYSTEMS",
    "✦",
    "AUTOMATION",
    "✦",
    "PYTHON",
    "✦",
    "LLM INTEGRATION",
    "✦",
  ];

  return (
    <div className="w-full bg-border/40 border-y border-border py-4 overflow-hidden flex whitespace-nowrap relative mt-16 mt-32 md:mt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-12 font-mono text-xl md:text-2xl font-bold tracking-widest text-primary shrink-0"
      >
        {/* Duplicate words for seamless looping */}
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className={word === "✦" ? "text-accent animate-pulse" : "opacity-80"}>
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
