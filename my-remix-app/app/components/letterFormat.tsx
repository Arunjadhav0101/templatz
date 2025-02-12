import { LetterType } from "~/utils/genai/letterType";
type FormatProps = {
  letterData: LetterType;
  className?: string;
};
function Letterformat({ letterData, className }: FormatProps) {
  className;
  return (
    <>
      <div
        id="letter"
        className="width-full border  flex flex-col gap-4 antialiased"
      >
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
    </>
  );
}

function Format2({ letterData }: FormatProps) {
  console.log("letter data", letterData);

  return (
    <div
      id="letter"
      className="max-w-[21cm] mx-auto border px-6 py-6 flex flex-col gap-4 antialiased"
    >
      <div className="font-bold">{letterData.date}</div>
      <div className="receipient-details">
        <p>{letterData.recipient.name}</p>
        <p>{letterData.recipient.title}</p>
        <p>{letterData.recipient.company}</p>
        <p>{letterData.recipient.address}</p>
      </div>
      <div className="subject font-bold">Subject:{letterData.subject}</div>
      <div className="body">{letterData.body}</div>
      <div className="sender-deatails">
        <p> {letterData.sender_details.name}</p>
        <p> {letterData.sender_details.title}</p>
      </div>
      <div className="sender-details ">
        <p>{letterData.sender.name}</p>
        <p>{letterData.sender.address}</p>
        <p>{letterData.sender.phone}</p>
      </div>
    </div>
  );
}

export { Letterformat, Format2 };
