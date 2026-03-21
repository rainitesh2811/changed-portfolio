import { APPLINK_VARIANTS } from "@/utils/contants";
import { PrimaryText, SecondaryText } from "./texts";

import Image from "next/image";
import AppLink from "./app-link";
import Link from "next/link";
import { Fragment } from "react";

export const CertificateCard = ({ certificate }) => {
  return (
    <div className="w-full h-fit border border-tertiary flex flex-col relative">
      <div className="absolute -left-4 -top-4 bg-secondary shadow shadow-purple-500/50 h-16 w-16 rounded-full overflow-hidden border-2 border-purple hover:scale-110 transition-transform duration-300 ease-in-out">
        <Link
          href={certificate.provider.url}
          target="_blank"
          rel="noopener noreferrer"
          // aria-label={`${testimonial.name}'s LinkedIn profile`}
        >
          <Image
            src={certificate.provider.logo}
            alt={certificate.provider.name}
            fill
            className="object-cover"
          />
        </Link>
      </div>

      <div className="border-b border-b-tertiary flex flex-wrap items-center gap-2 p-2 overflow-x-auto">
        <Link
          href={certificate.provider.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-14 text-purple-500 hover:text-purple-600 font-bold hover:underline"
        >
          {certificate.provider.name}
        </Link>
        <span className="w-2 h-2 rounded-full bg-primary"></span>
        <PrimaryText>{certificate.date}</PrimaryText>
      </div>

      <div className="flex flex-col gap-4 p-4 grow">
        <Link
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 font-bold transition-transform duration-300 ease-in-out"
        >
          <h4 className="font-medium text-lg transition-transform duration-300 ease-in-out">
            {certificate.title}
          </h4>
        </Link>

        <PrimaryText className={`line-clamp- grow`}>
          {certificate.description}
        </PrimaryText>

        <div className="flex gap-3">
          <h5 className="font-medium">Skills:</h5>

          <ul className="flex gap-2 flex-wrap">
            {certificate.skills.map((skill, index) => (
              <Fragment key={index}>
                <li>
                  <PrimaryText>{skill}</PrimaryText>
                </li>
                {index !== certificate.skills.length - 1 && (
                  <span className="my-auto w-1 h-1 rounded-full bg-primary"></span>
                )}
              </Fragment>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-4 mt-auto">
          <AppLink
            href={certificate.link}
            title={`${certificate.title} code`}
            target="_blank"
          >{`${"View >="}`}</AppLink>
        </div>
      </div>
    </div>
  );
};
