import { Section } from "./Section";
import { GithubIcon } from "@/components/icons/GithubIcon";
import Link from "next/link";
import { Code } from "./Code";



export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl text-primary">Glécia MAINDRON</h2>
                <h3 className="text-3xl font-caption">Software Developer</h3>
                <p> I am a Full Stack Developer. I love to build things and learn new technologies. 
                    I am currently enrolled in an Application Developer training program focused on Java/Spring and React. However, I have also included Python in my skill set, having learned it independently outside of the formal curriculum.  
                </p>
                <p className="font-bold">All my personal work is available on {" "}
                    <Link href="https://github.com/GleciaGaba">
                    <Code className="inline-flex items-center gap-1">
                        <GithubIcon size={14} className="inline" />
                        <span> Github</span>
                    </Code>
                    </Link>.
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img 
                src="https://avatars.githubusercontent.com/u/45296020?v=4" 
                alt="Glécia" 
                className="w-full h-auto max-w-xs rounded-full max-md:w-60"/>
            </div>

        </Section>
    );
};