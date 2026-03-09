import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 border-t border-border/50 bg-background flex items-center justify-center">
      <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <span>© {currentYear}</span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          Created with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by 
        </span>
        <Link 
          href="https://github.com/yafito11" 
          target="_blank" 
          className="font-semibold text-foreground hover:text-primary transition-colors underline decoration-primary/50 underline-offset-4"
        >
          Yafito
        </Link>
      </div>
    </footer>
  );
}
