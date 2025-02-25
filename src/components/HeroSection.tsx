

import HeroSectionCarousel from "./HeroSectionCarousel";
import { Button } from "./ui/button";

export default function Herosection() {


  return (
    <main className="flex flex-col md:flex-row w-screen h-screen items-center text-center mt-16 px-4 gap-10 md:gap-40">
      <div>
        <h2 className="pt-20 text-4xl font-bold text-gray-800">
          Free Cover Letter <br /> Generator: Build a Cover <br /> Letter Online
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Writing a cover letter has never been so easy. With the Zety cover letter builder, writing a cover letter is no
          longer the long, frustrating, confusing process you’re used to. Write a job-winning cover letter in minutes
          and land your dream job!
        </p>
        <Button className="mt-4">CREATE YOUR COVER LETTER</Button>
      </div>
    <HeroSectionCarousel/>
      <div>
      
      </div>
    </main>
  );
}
