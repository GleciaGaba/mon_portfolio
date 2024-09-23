import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Popcorn, CircleDollarSign, BookOpenText, GlobeLock} from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
    return(
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-full">
                <p className="text-lg text-muted-foreground font-bold">SIDE, FUN PROJECTS.</p>
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
                        <Work 
                        key={index} 
                        {...work}
                                />
                    ))}
                </div>
                </Card>
                <Card className="p-2 flex-1">
                    <p className="text-lg text-muted-foreground font-bold">CONTACT ME</p>
                    <a href="https://www.linkedin.com/in/maindron-glecia/" target="_blank" rel="noopener noreferrer">
                        <ContactCard 
                            name="Glécia Maindron" 
                            image="https://avatars.githubusercontent.com/u/45296020?v=4" 
                            mediumImage="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_200_200/company-logo_200_200/0/1638831590218/linkedin_logo?e=1735171200&v=beta&t=99gt4jymtRkPtcjUb8hIalO7Qz5QjqwzmrW9xGXgLhI" 
                            description="My LinkedIn"
                        />
                    </a>
                </Card>
            </div>
        </Section>
    );
};



const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: BookOpenText,
        title: "Books To Scrape",
        description: "Projects I've built for fun and learning purposes.",
        url: "https://github.com/GleciaGaba/books_to_scrape",
    },
    {
        Logo: GlobeLock,
        title: "Password Generator",
        description: "Projects I've built for fun and learning purposes.",
        url: "https://github.com/GleciaGaba/password-generator-",
    },
    {
        Logo: Popcorn,
        title: "Cine Club",
        description: "Projects I've built for fun and learning purposes.",
        url: "https://github.com/GleciaGaba/cine_club",
    },
    {
        Logo: CircleDollarSign,
        title: "Convertisseur De Devises",
        description: "Projects I've built for fun and learning purposes.",
        url: "https://github.com/GleciaGaba/convertisseur_de_devises",

    },
];






const WORKS: WorkProps[] =[
    {
        image: "https://media.licdn.com/dms/image/v2/C560BAQGiJ3GazXtU7w/company-logo_100_100/company-logo_100_100/0/1631307721096?e=1735171200&v=beta&t=wVmTj1D9NLypBNneOLKDqUcXFijjvsOI4z8XK8rcPU4",
        title: "DSI - AP",
        role: "Developer Full Stack",
        date: "2022 - 2024",
        url: "https://www.linkedin.com/company/dsi-ap/",
        freelance: false,
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQGKfadjVxGF-Q/company-logo_100_100/company-logo_100_100/0/1718875513847/natixis_corporate_investment_banking_logo?e=1735171200&v=beta&t=oCoSCe9oVPTICdUARJwY_nLQ_6OB4D5D0ebyDNSC24Q",
        title: "Natixis",
        role: "Java Developer",
        date: "2022 - 2023",
        url: "https://www.linkedin.com/company/natixis-corporate-investment-banking/posts/?feedView=all",
        freelance: true,
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQGcWr0fsOf1cQ/company-logo_100_100/company-logo_100_100/0/1718649945793/bpce_logo?e=1735171200&v=beta&t=Od775swBxwyifKbQ5BpJntzuZIUqyw4ZZ7wMR7iXJTA",
        title: "BPCE",
        role: "Python Developer",
        date: "2023 - 2024",
        url: "https://www.linkedin.com/company/bpce/posts/?feedView=all",
        freelance: true,

    },
];

