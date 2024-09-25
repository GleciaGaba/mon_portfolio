'use client';
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
            <Badge variant={"outline"}>
                Contact me
            </Badge>
            <h2 
            className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to join your team!
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <ContactCard 
                        url="https://www.linkedin.com/in/maindron-glecia/"
                        name="Glécia Maindron" 
                        image="https://avatars.githubusercontent.com/u/45296020?v=4" 
                        mediumImage="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_200_200/company-logo_200_200/0/1638831590218/linkedin_logo?e=1735171200&v=beta&t=99gt4jymtRkPtcjUb8hIalO7Qz5QjqwzmrW9xGXgLhI" 
                        description="My LinkedIn"  
                />
                <div onClick={downloadCV} style={{ cursor: 'pointer' }}>
                    <ContactCard 
                            url=""
                            name="Glécia Maindron" 
                            image="https://avatars.githubusercontent.com/u/45296020?v=4" 
                            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxidFC-3_rrWsH-exwGf4K14r0rRjQRGR73H6XiDoB71xB2VHS3F3cZlORTUArPl3V40&usqp=CAU" 
                            description="My CV"    
                    />
                </div>
                <ContactCard 
                        url="mailto:gleciparis@gmail.com"
                        name="gleciaparis@gmail.com" 
                        image="https://avatars.githubusercontent.com/u/45296020?v=4" 
                        mediumImage="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" 
                        description="My Gmail"     
                />
                
            </div>

        </Section>
    );
};