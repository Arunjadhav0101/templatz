import type { MetaFunction } from "@remix-run/node";

import Nav from "~/components/navbar";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div className="  border border-white  rounded-lg">
    
      
    </div>
  );
}
