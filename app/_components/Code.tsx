import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono border hover:bg-accent/70 transition-colors border-accent p-1 text-primary rounded-sm m-1",className)}{...props}/>
        
   
}