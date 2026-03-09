import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatBubble } from "@/components/chat-bubble";
import { Navbar } from "@/components/navbar";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yafie Yulianto – GenAI Engineer Portfolio",
  description: "Portfolio website of Yafie Yulianto, a GenAI Engineer and AI Enthusiast specializing in Agentic AI, RAG systems, and AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ChatBubble />
        <CustomCursor />
      </body>
    </html>
  );
}
