"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CircleCheckBig, ArrowDown, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden max-w-7xl mx-auto">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse pointer-events-none" />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col gap-6 mt-32 md:mt-0 z-10"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-light text-muted-foreground">
            Hello! <span className="text-foreground font-semibold">I&apos;m Yafie Yulianto</span>
          </h2>
          <div className="flex items-center gap-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              GenAI Engineer
            </h1>
            <span className="text-secondary animate-bounce text-4xl">✦</span>
          </div>
        </div>

        <p className="text-muted-foreground text-lg max-w-lg leading-relaxed mix-blend-screen">
          Building intelligent systems using Generative AI, Agentic Workflows, and modern automation tools.
        </p>

        <ul className="flex flex-col gap-3 my-4">
          <li className="flex items-center gap-2 text-foreground/80">
            <CircleCheckBig className="text-primary w-5 h-5" />
            <span>Generative AI Systems Development</span>
          </li>
          <li className="flex items-center gap-2 text-foreground/80">
            <CircleCheckBig className="text-primary w-5 h-5" />
            <span>Agentic Workflow Automation</span>
          </li>
          <li className="flex items-center gap-2 text-foreground/80">
            <CircleCheckBig className="text-primary w-5 h-5" />
            <span>RAG (Retrieval Augmented Generation)</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white">
            View My Projects
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-border">
            Contact Me
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>

      {/* Right Content / Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-full flex justify-center items-center relative mt-16 md:mt-0"
      >
        {/* Abstract decorative SVG */}
        <div className="absolute top-10 right-10 rotate-12 opacity-50">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#3B82F6" strokeWidth="4" strokeDasharray="10 10" />
            <circle cx="50" cy="50" r="30" stroke="#8B5CF6" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative w-[350px] h-[500px] md:w-[450px] md:h-[600px] overflow-hidden rounded-t-[40%] rounded-b-[20%] border-b-8 border-primary bg-gradient-to-b from-transparent to-muted/20 shadow-2xl backdrop-blur-sm">
          <Image
            src="/yafie.JPG"
            alt="Yafie Yulianto"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
        
        {/* Floating AI Nodes */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 md:-left-10 bg-card p-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-sm text-foreground">AI System Active</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
