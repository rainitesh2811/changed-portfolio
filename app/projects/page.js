import { Seperator } from "@/components/sections";
import AIProjects from "@/components/sections/ai-projects";
import Projects from "@/components/sections/completed-projects";
import OtherProjects from "@/components/sections/other-projects";

export const metadata = {
  title: "Prachi Rawat | Projects",
  description: "Discover my projects, showcasing my expertise in software engineering and web development.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <Seperator />
      <AIProjects />
      <Seperator />
      <Seperator />
      <OtherProjects/>
    </>
  );
}
