import { SubTitle } from "../titles";
import { CERTIFICATES } from "@/utils/data";
import { Section, WrapSection } from "../sections";

import DotsSVG from "../assets/DotsSVG";
import DesignSVG from "../assets/DesignSVG";
import RectangleSVG from "../assets/RectangleSVG";
import { CertificateCard } from "../CertificateCard";

export default function Certifications({ home = false }) {
  return (
    <Section>
      <WrapSection>
        <div
          className={`grid grid-cols-1 gap-y-4 gap-x-10 ${home ? "md:grid-cols-[3fr_4fr]" : ""}`}
        >
          <SubTitle line={home}>certifications</SubTitle>

          <div className={`mt-0 grid grid-cols-1 gap-6 sm:grid-cols-2`}>
            {CERTIFICATES.map((certificate) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
              />
            ))}
          </div>

          <>
            <DotsSVG className="w-20 h-20 absolute top-[40%] -left-8 hidden md:block" />
            <RectangleSVG className="w-18 h-18 absolute top-[10%] -right-4 hidden md:block" />
          </>
        </div>
      </WrapSection>
    </Section>
  );
}
