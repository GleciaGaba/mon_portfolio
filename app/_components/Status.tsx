import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Popcorn, CircleDollarSign, Store, Film } from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground font-bold">
            SIDE, FUN PROJECTS.
          </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground font-bold">WORK</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-1 flex-1">
          <p className="text-lg text-muted-foreground font-bold">CONTACT ME</p>
          <ContactCard
            url="https://www.linkedin.com/in/maindron-glecia/"
            name="Glécia Maindron"
            image="https://avatars.githubusercontent.com/u/45296020?v=4"
            mediumImage="linkedin-logo.png"
            description="My LinkedIn"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Store,
    title: "Gaba Store",
    description: "E-commerce website built with Java/Spring and Angular.",
    url: "https://github.com/GleciaGaba/GabaStore-bke",
  },
  {
    Logo: Film,
    title: "Movie Reviews",
    description: "Movie Review Application",
    url: "https://github.com/GleciaGaba/movies_back_front",
  },
  {
    Logo: Popcorn,
    title: "Cine Club",
    description: "Project built with Python for learning purposes.",
    url: "https://github.com/GleciaGaba/cine_club",
  },
  {
    Logo: CircleDollarSign,
    title: "Convertisseur De Devises",
    description: "Project built with Python for learning purposes.",
    url: "https://github.com/GleciaGaba/convertisseur_de_devises",
  },
];

const WORKS: WorkProps[] = [
  {
    image: "DSI-logo.png",
    title: "DSI - AP",
    role: "Developer Full Stack",
    date: "2022 - 2024",
    url: "https://www.linkedin.com/company/dsi-ap/",
    freelance: false,
  },
  {
    image: "Natixis-logo.jpg",
    title: "Natixis",
    role: "Java Developer",
    date: "2022 - 2023",
    url: "https://www.linkedin.com/company/natixis-corporate-investment-banking/posts/?feedView=all",
    freelance: true,
  },
  {
    image: "BPCE-logo.png",
    title: "BPCE",
    role: "Python Developer",
    date: "2023 - 2024",
    url: "https://www.linkedin.com/company/bpce/posts/?feedView=all",
    freelance: true,
  },
];
