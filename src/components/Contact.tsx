"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 md:px-16 bg-muted/20 border-t border-border mt-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Work Availability & Socials */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold">Let&apos;s Collaborate</h2>
          <p className="text-muted-foreground text-lg mb-4">
            I am open to new opportunities and exciting collaborations. If you are looking for an AI expert, let&apos;s talk!
          </p>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold mb-2 text-primary">I am available for:</h3>
            <ul className="flex flex-col gap-2 text-foreground/80">
              <li className="flex items-center gap-2 before:content-['✦'] before:text-accent">Remote AI Engineer</li>
              <li className="flex items-center gap-2 before:content-['✦'] before:text-accent">Freelance AI Projects</li>
              <li className="flex items-center gap-2 before:content-['✦'] before:text-accent">AI System Development</li>
              <li className="flex items-center gap-2 before:content-['✦'] before:text-accent">GenAI Consulting</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="mailto:info@example.com" className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-white transition-all text-muted-foreground hover:border-primary">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-card border border-border rounded-full hover:bg-[#0077b5] hover:text-white transition-all text-muted-foreground hover:border-[#0077b5]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-card border border-border rounded-full hover:bg-white hover:text-black transition-all text-muted-foreground hover:border-white">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-card w-full shadow-2xl border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                <Textarea id="message" placeholder="How can I help you?" className="min-h-[150px] bg-background border-border resize-none" />
              </div>
              <Button type="submit" className="w-full sm:w-auto self-end bg-primary hover:bg-primary/90 text-white rounded-md mt-2">
                Send Message <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
