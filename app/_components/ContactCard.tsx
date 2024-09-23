import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";


export const ContactCard = (props:{
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
