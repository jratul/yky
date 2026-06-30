import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { ExperienceSection } from "@components/ExperienceSection";
import { ProjectsSection } from "@components/ProjectsSection";
import { Contact, Footer } from "@components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0c] text-neutral-200 antialiased">
      <Header />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </main>
  );
}
