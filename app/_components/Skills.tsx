import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "@/components/icons/ReactLogo";
import { Code } from "./Code";
import { JavaLogo } from "@/components/icons/JavaLogo";
import { PythonLogo } from "@/components/icons/PythonLogo";
import { MySQLLogo } from "@/components/icons/MySQLLogo";



export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>
                Skills
            </Badge>
            <h2 
            className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <ReactLogo 
                        size={42} 
                        className="animate-spin" 
                        style={{animationDuration:"10s"}}
                    />
                        
                    <h3 className="text-2xl font-semibold tracking-tight">
                        React
                    </h3>
                    <p 
                    className="text-sm text-muted-foreground">
                        During my initial training as a web developer, I worked primarily with the Angular framework. However, I decided to specialize in <Code>React</Code> because I enjoyed its flexibility and simplicity in building user interfaces. The way <Code>React</Code> facilitates the creation of reusable components and its seamless integration with other libraries were also key factors that attracted me.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <JavaLogo size={42} className="animate-pulse"/>
                        
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Java
                    </h3>
                    <p 
                    className="text-sm text-muted-foreground">
                        I primarily worked with <Code>Java</Code>. I spent over a year working on a legacy <Code>Java</Code> project, which provided me with valuable experience in maintaining and enhancing existing codebase. However, I decided to deepen my expertise in modern Java development because I enjoy its robust ecosystem and versatility. The language’s strong community support and its wide range of frameworks and tools make it ideal for building scalable and high-performance applications.
                    </p>
                </div>
                  
            </div>
            
            
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <PythonLogo size={42}/>
                        
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Python
                    </h3>
                    <p 
                    className="text-sm text-muted-foreground">
                    I spent a year working on a <Code>Python</Code> project, and I found the experience highly rewarding. Since then, I have been continuously honing my <Code>Python</Code> skills, as I am particularly drawn to the language’s elegance and versatility. Its simplicity and powerful libraries make it ideal for a wide range of applications, from data analysis to web development.
                    </p>
                </div>


                <div className="flex flex-col gap-2">
                    <MySQLLogo size={42}/>
                        
                    <h3 className="text-2xl font-semibold tracking-tight">
                        SQL/NoSQL
                    </h3>
                    <p 
                    className="text-sm text-muted-foreground">
                    I have hands-on experience with <Code>SQL</Code>, including writing complex queries, designing schemas, and optimizing database performance. I have worked with PostgreSQL, MySQL, and Oracle to develop efficient queries and manage data integrity. Additionally, I have experience with <Code>NoSQL</Code> databases like MongoDB, using its flexible schema design to handle and analyze unstructured data.
                    </p>
                </div>
                
            </div>

        </Section>
    );
};