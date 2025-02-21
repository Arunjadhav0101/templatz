import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";
import Details from "~/components/details";
import { GoogleGeminiEffectDemo } from "~/components/GeminiEffect";
import Home from "~/components/home";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Home />
      <Details />
      <About/>
      <GoogleGeminiEffectDemo/>
      <div className="h-screen bg-transparent"></div>
    </div>
  );
}
