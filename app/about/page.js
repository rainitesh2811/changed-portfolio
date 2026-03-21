import { Seperator } from "@/components/sections";

import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FunFacts from "@/components/sections/fun-facts";
import Testimonials from "@/components/sections/testimonials";
import Certifications from "@/components/sections/certifications";

export const metadata = {
  title: "About Prachi Rawat | Software Engineer & Web Developer",
  description:
    "Learn about Prachi Rawat's journey, skills, and experience as a Software Engineer specializing in Data Analysis and Web Development.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Seperator />

      <Skills />
      <Seperator />

      <Certifications />
      <Seperator />

      <Testimonials />
      <Seperator />

      <FunFacts />
    </>
  );
}
