import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
export const Header = () => {
    return(
    <header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">
                gleciamaindron.com
            </h1>
            <div className="flex-1"></div>
            <ul className="flex items-center gap-2">
                <Link 
                href="https://github.com/GleciaGaba"
                className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}>
                <GithubIcon size={12} className="text-foreground"/>
                </Link>
                <Link 
                href="https://www.linkedin.com/in/maindron-glecia/"
                className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}>
                <LinkedInIcon size={12} className="text-foreground"/>
                </Link>
            </ul>
        </Section>


    </header>)
}