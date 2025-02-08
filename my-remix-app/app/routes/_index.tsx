import type { MetaFunction } from "@remix-run/node";
import Details from "~/components/details";
import Home from "~/components/home"


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div className="  border border-white  rounded-lg">
    
    <Home/> 
         <Details/>
    </div>
  );
}

