import { MetaFunction } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { useLetterData } from "~/lib/letterContext";
import "../letter.css"

export const meta:MetaFunction = () =>[
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Brawler:wght@400;700&display=swap",
  },
]
function Letter() {
  const { letterData } = useLetterData();
  const location = useLocation()
console.log(letterData,"letter page");

  if(letterData?.body){
    return  (<div id="letter" className="max-w-[21cm] mx-auto border px-6 py-6 flex flex-col gap-4 antialiased">
        <div className="sender-details ">
          <p>{letterData.sender.name}</p>
          <p>{letterData.sender.address}</p>
          <p>{letterData.sender.phone}</p>
        </div>
        <div className="font-bold">{letterData.date}</div>
        <div className="receipient-details">
          <p>{letterData.recipient.name}</p>
          <p>{letterData.recipient.title}</p>
          <p>{letterData.recipient.company}</p>
          <p>{letterData.recipient.address}</p>
        </div>
        <div className="subject font-bold">Subject:{letterData.subject}</div>
        <div className="greting">{letterData.greeting}</div>
        <div className="body">{letterData.body}</div>
        <div>{letterData.closing}</div>
        <div className="sender-deatails">
          <p> {letterData.sender_details.name}</p>
          <p> {letterData.sender_details.title}</p>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>
  
}

export default Letter;
