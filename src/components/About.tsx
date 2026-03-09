import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 animate-pulse" />
          <Card className="relative bg-card border-border/50">
            <CardContent className="p-10 flex flex-col gap-6">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Saya adalah seorang <strong className="text-foreground">Guru Informatika di salah satu SMA di Bumiayu</strong> sekaligus 
                  <strong className="text-foreground"> AI Enthusiast</strong> yang sangat mengikuti perkembangan dunia Artificial Intelligence.
                </p>
                <p>
                  Saya aktif mempelajari berbagai model AI terbaru, mengeksplorasi berbagai tools AI modern, serta 
                  melakukan berbagai eksperimen terutama dalam bidang <strong className="text-primary">Agentic AI Systems</strong> dan <strong className="text-primary">Generative AI Engineering</strong>.
                </p>
                <p>
                  Ketertarikan besar saya terletak pada membangun sistem AI praktis yang dapat digunakan secara nyata dalam kehidupan 
                  sehari-hari maupun dalam dunia pendidikan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8 h-full justify-center">
          <div className="p-8 border-l-2 border-accent/50 group hover:border-accent transition-colors">
            <h3 className="text-3xl font-bold mb-2">Vision</h3>
            <p className="text-muted-foreground">Democratizing AI usage in education and daily life through practical, scalable automation.</p>
          </div>
          <div className="p-8 border-l-2 border-primary/50 group hover:border-primary transition-colors">
            <h3 className="text-3xl font-bold mb-2">Focus</h3>
            <p className="text-muted-foreground">Building Agents that do real work, bridging the gap between LLMs and actual software products.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
