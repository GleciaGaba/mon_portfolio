"use client";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/gleciamaindron.pdf";
  link.download = "gleciamaindron.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to join your team!
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <ContactCard
          url="https://www.linkedin.com/in/maindron-glecia/"
          name="Glécia Maindron"
          image="https://avatars.githubusercontent.com/u/45296020?v=4"
          mediumImage="/linkedin-logo.png"
          description="My LinkedIn"
        />
        <div onClick={downloadCV} style={{ cursor: "pointer" }}>
          <ContactCard
            url=""
            name="Glécia Maindron"
            image="https://avatars.githubusercontent.com/u/45296020?v=4"
            mediumImage="mycv-logo.png"
            description="My CV"
          />
        </div>
        <ContactCard
          url="mailto:gleciparis@gmail.com"
          name="gleciaparis@gmail.com"
          image="https://avatars.githubusercontent.com/u/45296020?v=4"
          mediumImage="gmail-logo.png"
          description="My Gmail"
        />
      </div>
    </Section>
  );
};
