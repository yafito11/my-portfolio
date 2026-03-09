import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, BrainCircuit, Wrench, Lightbulb } from "lucide-react";

export function Skills() {
  const customCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-8 h-8 text-primary mb-4" />,
      skills: ["Python", "TypeScript / Next.js"]
    },
    {
      title: "AI Engineering",
      icon: <BrainCircuit className="w-8 h-8 text-secondary mb-4" />,
      skills: ["Generative AI Systems", "Agentic Workflows", "RAG (Retrieval Augmented Gen)"]
    },
    {
      title: "Tools & Automation",
      icon: <Wrench className="w-8 h-8 text-accent mb-4" />,
      skills: ["OpenClaw", "n8n", "AI Automation Tools"]
    },
    {
      title: "Other Skills",
      icon: <Lightbulb className="w-8 h-8 text-destructive mb-4" />,
      skills: ["Prompt Engineering", "AI System Design", "LLM Integration"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-center items-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-primary uppercase">My Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold">What I&apos;m Offering</h3>
        <p className="text-muted-foreground max-w-2xl mt-4">
          Transforming complex concepts into scalable and practical AI solutions. 
          Here are the core technologies I specialize in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customCategories.map((cat, i) => (
          <Card key={i} className="group hover:border-primary transition-colors duration-300 bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              {cat.icon}
              <CardTitle>{cat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex flex-col gap-2 group-hover:pl-2 transition-all duration-300">
                    <span className="text-foreground/80 font-medium">{skill}</span>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
