import { LinksFunction } from "@remix-run/node";
import { useLetterData } from "~/utils/letterContext";
import "../letter.css";
import { LetterFormat1, LetterFormat2 } from "~/components/letterFormat";
import { Button } from "~/components/ui/button";

export const links: LinksFunction = () => [
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
];

export default function LetterPage() {
  const { letterData } = useLetterData();
  console.log(letterData, "letter page");

  if (letterData?.body) {
    return (
      <div>
        <div className="content flex flex-col gap-4 mx-auto" id="letter">
          <LetterFormat2 letterData={letterData}></LetterFormat2>
        </div>
        <div>
          <Button onClick={() => window.print()}>Print</Button>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
}
