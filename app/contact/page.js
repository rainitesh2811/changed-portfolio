import { Seperator } from "@/components/sections";

import Contact from "@/components/sections/contact";
import AllMedia from "@/components/sections/all-media";

export const metadata = {
  title: "Contact Prachi Rawat | Software Engineer & Web Developer",
  description:
    "Reach out to Prachi Rawat for inquiries, collaborations, or just to say hello!",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Seperator />
      <AllMedia />
    </>
  );
}
