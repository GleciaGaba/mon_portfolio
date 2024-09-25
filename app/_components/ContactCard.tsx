import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
}) => { 
    return (
    <Link href={props.url}>
        <Card className="p-4 bg-accent/10 hover:bg-accent/40 transition-colors group flex items-center gap-4 w-full max-w-sm">
            <div className="relative w-12 h-12">
                <img
                src={props.image}
                alt={props.name}
                className="w-12 h-12 rounded-full object-cover"
                />
                <img
                src={props.mediumImage}
                alt={props.name}
                className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-cover border-2 border-white"
                />
            </div>

            <div className="flex flex-col mr-auto">
                <p className="text-sm font-semibold">{props.name}</p>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight
                className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform"
                size={20}
            />
        </Card>
    </Link>
);
};
