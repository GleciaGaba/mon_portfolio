import { Badge } from "@/components/ui/badge";
import { Section } from "lucide-react";

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>
            Skills
        </Badge>
        <h2 
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on...
        </h2>

    </Section>
    );
};