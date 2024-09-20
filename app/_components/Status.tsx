import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ReactNode } from "react";
import { LucideIcon, ShoppingCart, Dumbbell, Popcorn, CircleDollarSign, BookOpenText, GlobeLock, ArrowUpRight } from "lucide-react";
import { url } from "inspector";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";

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

const ContactCard = (props:{
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    
}) => {
    return (
        <Card className="p-2 bg-accent/10 hover:bg-accent/40 transition-colors group flex items-center gap-9">
            <div className="relative">
                <img src={props.image} alt={props.name} 
                className="w-10 h-10 rounded-full object-contain"/>
                <img src={props.mediumImage} 
                alt={props.name} 
                className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"/>
            </div>
            
            <div className="mr-auto">
                <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold">{props.name}</p>
                </div>
                
                <p className="text-xs text-muted-foreground">
                    {props.description}
                </p>
            </div>
            <ArrowUpRight 
            className="group-hover:translate-x-2 mr-6 group-hover:-translate-y-2 transition-transform" 
            size={20}/>
            

        </Card>
    )
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

type SideProjectProps = {
    Logo: LucideIcon, 
    title:string,
    description:string;
    url:string;
};


const SideProject = (props: SideProjectProps) => {
    return(
        <Link 
        href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-2 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
                <p className="text-lg font-semibold">
                    {props.title}
                </p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
            
        </Link>
    )
};




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

type WorkProps = {
    image: string;
    title:string;
    role:string;
    date:string;
    url:string;
    freelance: boolean;
};


const Work = (props: WorkProps) => {
    return(
        <Link 
        href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            
                <img 
                src={props.image} 
                alt={props.title} 
                className="w-6 h-6 object-contain rounded-md" 
                />
            
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">Mission</Badge>}
                    
                </div>
                
                <p className="text-xs text-muted-foreground">
                    {props.role}
                </p>
            </div>
            
                <p className="text-xs text-end text-muted-foreground">
                    {props.date}
                </p>

            
            
        </Link>
    )
};