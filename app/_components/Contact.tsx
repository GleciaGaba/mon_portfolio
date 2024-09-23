import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "@/components/icons/ReactLogo";
import { Code } from "./Code";
import { JavaLogo } from "@/components/icons/JavaLogo";
import { PythonLogo } from "@/components/icons/PythonLogo";
import { MySQLLogo } from "@/components/icons/MySQLLogo";
import { ContactCard } from "./ContactCard";



export const Contact
 = () => {
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
                <ContactCard 
                        name="Glécia Maindron" 
                        image="https://avatars.githubusercontent.com/u/45296020?v=4" 
                        mediumImage="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_200_200/company-logo_200_200/0/1638831590218/linkedin_logo?e=1735171200&v=beta&t=99gt4jymtRkPtcjUb8hIalO7Qz5QjqwzmrW9xGXgLhI" 
                        description="My LinkedIn"
                />
                <ContactCard 
                        name="Glécia Maindron" 
                        image="https://avatars.githubusercontent.com/u/45296020?v=4" 
                        mediumImage="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_200_200/company-logo_200_200/0/1638831590218/linkedin_logo?e=1735171200&v=beta&t=99gt4jymtRkPtcjUb8hIalO7Qz5QjqwzmrW9xGXgLhI" 
                        description="My LinkedIn"
                />
                <ContactCard 
                        name="gleciaparis@gmail.com" 
                        image="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" 
                        mediumImage="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_200_200/company-logo_200_200/0/1638831590218/linkedin_logo?e=1735171200&v=beta&t=99gt4jymtRkPtcjUb8hIalO7Qz5QjqwzmrW9xGXgLhI" 
                        description="My LinkedIn"
                />
                
            </div>

        </Section>
    );
};