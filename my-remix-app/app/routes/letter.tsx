
const letter = {
  sender: {
    name: "[sender-name]",
    address:
      "[sender-address], $ [sender-city], $ [sender-state], [sender-zip]",
    phone: "[sender-phone]",
    email: "[sender-email]",
  },
  date: "[date]",
  recipient: {
    name: "[recipient-name]",
    title: "[recipient-title]",
    company: "[company-name]",
    address:
      "[company-address], $ [company-city], $ [company-state], [company-zip]",
  },
  subject: "[subject]",
  greeting: "[Respected/Dear] [Title] [Name]",
  body: "[Formatted letter content here with paragraphs, bullet points, or numbering where necessary]",
  closing: "[Yours sincerely/faithfully]",
  sender_details: {
    name: "[sender-name]",
    title: "[sender-title]",
  },
};
function Letter() {

  return (
    <div id="letter" className="max-w-[2480px] border ">
      <div className="sender-details ">
        <p>{letter.sender.name}</p>
        <p>{letter.sender.address}</p>
        <p>{letter.sender.phone}</p>
      </div>
      <div className="font-bold">{letter.date}</div>
      <div className="receipient-details">
        <p>{letter.recipient.name}</p>
        <p>{letter.recipient.title}</p>
        <p>{letter.recipient.company}</p>
        <p>{letter.recipient.address}</p>
      </div>
      <div className="subject font-bold">Subject:{letter.subject}</div>
      <div className="greting">{letter.greeting}</div>
      <div className="body">{letter.body}</div>
      <div>{letter.closing}</div>
      <div className="sender-deatails">
        <p> {letter.sender_details.name}</p>
        <p> {letter.sender_details.title}</p>
      </div>
    </div>
  );
}

export default Letter;
