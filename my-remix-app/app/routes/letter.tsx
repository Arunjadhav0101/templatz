import { LinksFunction} from "@remix-run/node";
import { useLetterData } from "~/lib/letterContext";
import "../letter.css"

export const links:LinksFunction = () =>[
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Brawler:wght@400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
  },
]
const letterData = {
  "sender": {
      "name": "Alice Johnson",
      "address": "123 Elm Street, Springfield, IL 62704",
      "phone": "+1-555-123-4567",
      "email": "alice.johnson@example.com"
  },
  "date": "2025-02-11",
  "recipient": {
      "name": "Michael Smith",
      "title": "Hiring Manager",
      "company": "Tech Innovators Inc.",
      "address": "456 Oak Avenue, San Francisco, CA 94107"
  },
  "subject": "Application for Backend Developer Position",
  "greeting": "Dear Mr. Smith,",
  "body": ["I am writing to express my interest in the Backend Developer position at Tech Innovators Inc. With my experience in JavaScript, Golang, and Remix.js, I am eager to contribute to your development team.", "I am particularly excited about the opportunity to work on scalable backend systems and bring efficient solutions to your projects."," I have attached my resume for your review and look forward to discussing how my skills align with your needs."],
  "closing": "Thank you for your time and consideration. I look forward to your response.",
  "sender_details": {
      "name": "Alice Johnson",
      "title": "Software Developer"
  }
}

export default function Letter() {
 // const { letterData } = useLetterData();
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
        <div className="body">{
          letterData.body.map((paragraph, idx)=><p key={idx}>{paragraph}</p>)
        }</div>
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


