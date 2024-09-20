import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ReactNode } from "react";
import { LucideIcon, ShoppingCart, Dumbbell, Popcorn, CircleDollarSign, BookOpenText, GlobeLock } from "lucide-react";
import { url } from "inspector";
import Link from 'next/link';

export const Status = () => {
    return(
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-full">
                <p className="text-lg text-muted-foreground"><span className="font-bold">SIDE, FUN PROJECTS.</span></p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject 
                        key={index} 
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                                />
                    ))}
                </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Work</p>
                </Card>
                <Card className="p-4 flex-1">
                    Contact me
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS = [
    {
        Logo: BookOpenText,
        title: "Books To Scrape",
        description: "Projects I've built for fun and learning purposes."
    },
    {
        Logo: GlobeLock,
        title: "Password Generator",
        description: "Projects I've built for fun and learning purposes."
    },
    {
        Logo: Popcorn,
        title: "Cine Club",
        description: "Projects I've built for fun and learning purposes."
    },
    {
        Logo: CircleDollarSign,
        title: "Convertisseur De Devises",
        description: "Projects I've built for fun and learning purposes."

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
            <span className="bg-accent text-accent-foreground p-2 rounded-sm"><props.Logo /></span>
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

type WorkProps = {
    image: string;
    title:string;
    description:string;
    date:string;
    url:string;
};


const Work = (props: WorkProps) => {
    return(
        <Link 
        href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-2 rounded-sm">
                <img 
                src={props.image} 
                alt={props.title} 
                className="w-4 h-4 object-contain" 
                />
            </span>
            <div>
                <p className="text-lg font-semibold">
                    {props.title}
                </p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
            <div className="flex-1">

            </div>
            
        </Link>
    )
};