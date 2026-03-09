"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "My Projects",
      subtext: "Explore my AI and\nengineering projects",
      href: "#projects",
    },
    {
      title: "About Me",
      subtext: "Learn about my background\nand experience",
      href: "#about",
    },
    {
      title: "Contact me",
      subtext: "myafieyulianto98@gmail.com",
      href: "#contact",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block relative group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="text-3xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-105">
                Yafito.
              </div>
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="md:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Items (Desktop) */}
          <div className="hidden md:flex items-start gap-12">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="flex flex-col group w-40"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[17px] font-semibold text-foreground transition-colors">
                    {item.title}
                  </span>
                  <ArrowUpRight 
                    size={16} 
                    strokeWidth={1.5} 
                    className="text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </div>
                
                {/* Thin line */}
                <div className="w-full h-[1px] bg-muted mt-2 mb-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-foreground origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                </div>

                <span className="text-[11px] leading-snug text-muted-foreground whitespace-pre-line group-hover:text-foreground transition-colors duration-300">
                  {item.subtext}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 pb-6 px-6 md:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-10 mt-8">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col group"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl font-bold text-foreground">
                      {item.title}
                    </span>
                    <ArrowUpRight 
                      size={24} 
                      className="text-foreground"
                    />
                  </div>
                  
                  <div className="w-full h-[2px] bg-muted mt-3 mb-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-foreground origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  </div>

                  <span className="text-sm text-muted-foreground whitespace-pre-line">
                    {item.subtext}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center mt-16 pb-8 border-t border-border pt-8">
              <div className="text-4xl font-black tracking-tighter text-muted-foreground opacity-30">
                Yafito.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
