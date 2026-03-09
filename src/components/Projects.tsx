import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageSquareText, Database, Network, School, BookOpen, BrainCircuit, Bot, Workflow, Settings } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "Chatbot RAG",
      description: "AI Chatbot yang menggunakan Retrieval Augmented Generation untuk menjawab pertanyaan berdasarkan knowledge base tertentu secara kontekstual.",
      tags: ["Python", "LLM API", "Vector Database"],
      githubLink: "https://github.com/yafito11",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-background to-background group-hover:opacity-40 transition-opacity" />
          <div className="flex items-center justify-center gap-4 z-10 transition-transform duration-500 group-hover:scale-110">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
               <MessageSquareText className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex flex-col gap-2">
               <Network className="w-5 h-5 text-gray-500 animate-pulse" />
            </div>
            <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
               <Database className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Website Sekolah Berbasis AI",
      description: "Website sekolah yang dilengkapi dengan fitur AI Assistant berbasis RAG untuk membantu siswa dan guru mendapatkan informasi secara cepat.",
      tags: ["AI Q&A sekolah", "Knowledge Base", "AI Helpdesk"],
      githubLink: "https://github.com/yafito11",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 via-background to-background group-hover:opacity-40 transition-opacity" />
          <div className="flex flex-col items-center justify-center gap-2 z-10 transition-transform duration-500 group-hover:-translate-y-2">
            <div className="relative">
              <School className="w-16 h-16 text-gray-300" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/50 flex items-center justify-center animate-bounce shadow-[0_0_10px_rgba(34,197,94,0.8)]">
                <BrainCircuit className="w-4 h-4 text-green-400" />
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <BookOpen className="w-5 h-5 text-gray-500" />
              <MessageSquareText className="w-5 h-5 text-green-500/70" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Agent System",
      description: "Sistem Agentic AI yang dapat menjalankan berbagai tugas otomatis menggunakan workflow berbasis AI agent secara presisi.",
      tags: ["Openclaw", "n8n", "Python"],
      githubLink: "https://github.com/yafito11",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500 via-background to-background group-hover:opacity-40 transition-opacity" />
          <div className="flex items-center justify-center z-10 relative transition-transform duration-500 group-hover:rotate-3">
             <div className="absolute w-24 h-24 border border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute w-16 h-16 border border-cyan-500/20 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
             <div className="w-12 h-12 bg-cyan-500/20 backdrop-blur-md rounded-xl border border-cyan-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)] z-20">
               <Bot className="w-6 h-6 text-cyan-300" />
             </div>
             {/* Workflow nodes */}
             <div className="absolute -top-4 -right-8 w-6 h-6 rounded bg-gray-800 border border-cyan-500/50 flex items-center justify-center"><Settings className="w-3 h-3 text-cyan-400" /></div>
             <div className="absolute -bottom-6 -left-6 w-6 h-6 rounded bg-gray-800 border border-cyan-500/50 flex items-center justify-center"><Workflow className="w-3 h-3 text-cyan-400" /></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 border-t border-border/50 bg-muted/10 mx-auto w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Case Studies</h2>
          <p className="text-muted-foreground w-full max-w-xl">
            A selection of my recent AI projects, showcasing real-world applications of Generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <Card key={idx} className="group bg-card border-border hover:border-secondary transition-all duration-300 flex flex-col h-full overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              {/* Illustration Area */}
              <div className="h-56 w-full bg-[#0a0a0a] overflow-hidden border-b border-border/50">
                {proj.visual}
              </div>
              <CardHeader className="flex-grow pt-6">
                <CardTitle className="text-xl">{proj.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2 line-clamp-4">
                  {proj.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={proj.githubLink} target="_blank" className="w-fit">
                  <Button variant="outline" className="w-fit gap-2 border-border group-hover:border-primary group-hover:text-primary transition-colors cursor-none pointer-events-auto">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
