"use client";
import { LetterType } from "./LetterType";
interface FormatProps {
  letterData: LetterType;
  className?: string;
}
interface LetterSelectorProps extends FormatProps {
  format: "format1" | "format2";
}
function LetterFormat1({ letterData }: FormatProps) {
  return (
    <>
      <div className="sender-details ">
        <p>{letterData.sender.name}</p>
        {Array.isArray(letterData.sender.address) ? (
          letterData.sender.address.map((line) => <p key={line}>{line}</p>)
        ) : (
          <p>{letterData.sender.address}</p>
        )}
        <p>{letterData.sender.phone}</p>
      </div>
      <div className="font-bold">{letterData.date}</div>
      <div className="receipient-details">
        <p>{letterData.recipient.name}</p>
        <p>{letterData.recipient.title}</p>
        <p>{letterData.recipient.company}</p>
        <p>{letterData.recipient.address}</p>
      </div>
      <div className="subject font-bold">Subject : {letterData.subject}</div>
      <div className="greting">{letterData.greeting}</div>
      <div className="body text-justify">
        {Array.isArray(letterData.body) ? (
          letterData.body.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))
        ) : (
          <p>{letterData.body}</p>
        )}
      </div>
      <div>{letterData.closing}</div>
      <br />
      <div className="sender-deatails">
        <p> {letterData.sender_details.name}</p>
        <p> {letterData.sender_details.title}</p>
      </div>
    </>
  );
}

function LetterFormat2({ letterData }: FormatProps) {
  return (
    <>
      <div className="font-bold">{letterData.date}</div>
      <div className="receipient-details">
        <p>{letterData.recipient.name}</p>
        <p>{letterData.recipient.title}</p>
        <p>{letterData.recipient.company}</p>
        <p>{letterData.recipient.address}</p>
      </div>
      <div className="subject font-bold">Subject:{letterData.subject}</div>
      <div className="greting">{letterData.greeting}</div>
      <div className="body text-justify">
        {Array.isArray(letterData.body) ? (
          letterData.body.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))
        ) : (
          <p>{letterData.body}</p>
        )}
      </div>
      <div>{letterData.closing}</div>
      <br />
      <div className="sender-details ">
        <p>{letterData.sender.name}</p>
        <p> {letterData.sender_details.title}</p>
        {Array.isArray(letterData.sender.address) ? (
          letterData.sender.address.map((line) => <p key={line}>{line}</p>)
        ) : (
          <p>{letterData.sender.address}</p>
        )}
        <p>{letterData.sender.phone}</p>
      </div>
    </>
  );
}

const LetterFormatSelector: React.FC<LetterSelectorProps> = ({
  letterData,
  format,
}) => {
  switch (format) {
    case "format1":
      return <LetterFormat1 letterData={letterData} />;
    case "format2":
      return <LetterFormat2 letterData={letterData} />;
    default:
      return null;
  }
};
export default LetterFormatSelector;

export { LetterFormat1, LetterFormat2 };
