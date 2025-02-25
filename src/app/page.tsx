import GeminiEffect from "@/components/GeminiEffect";
import Herosection from "@/components/HeroSection";
import Navbar from "@/components/navBar";
import { OurJourney } from "@/components/OurJourney";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-prima">
      <Navbar/>
       <Herosection/>
       <OurJourney/>
      <GeminiEffect/>
    </div>
  );
}
