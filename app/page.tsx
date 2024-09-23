import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contact } from "lucide-react";


export default function Home() {
  return (
    <main>{
      <div>
        <main>
          <Header />

          <Spacing size="md"/>

          <Hero />

          <Spacing size="md"/>

          <Status />

          <Spacing size="md"/>

          <Skills />

          <Spacing size="md"/>
          
          <Contact />
        </main>
      </div>
      }


    </main>
  );
    
}
