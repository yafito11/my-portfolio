import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex items-center gap-4 text-primary mb-4">
          <Briefcase className="w-8 h-8" />
          <h2 className="text-4xl font-bold text-foreground">Experience</h2>
        </div>
        
        <Card className="bg-card/40 border-l-4 border-l-primary hover:border-l-accent transition-colors">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-1">Guru Informatika</h3>
            <p className="text-muted-foreground font-medium mb-4">SMA – Bumiayu</p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 flex flex-col">
              <li>Mengajar dan membimbing siswa dalam bidang Informatika.</li>
              <li>Mengintegrasikan Artificial Intelligence dalam proses pembelajaran.</li>
              <li>Bereksperimen dengan penggunaan AI untuk efisiensi pendidikan.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 flex flex-col gap-8">
        <div className="flex items-center gap-4 text-accent mb-4">
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </div>

        <Card className="bg-card/40 border-l-4 border-l-secondary hover:border-l-primary transition-colors">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-1">Computer Science</h3>
            <p className="text-muted-foreground font-medium">Universitas Amikom Purwokerto</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
