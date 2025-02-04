import { Button } from "~/components/ui/button"
import { Input }  from "~/components/ui/input"
import { Form } from "@remix-run/react"

function GenerateLetter() {
    const formFields = [
        {
          type: "text",
          placeholder: "Enter first Name",
          name: "sender-name",
          label: "Your Name",
        },
        {
          type: "text",
          placeholder: "Enter Address Name",
          name: "sender-address",
          label: "Your Address",
        },
        {
          type: "text",
          placeholder: "Enter City Name",
          name: "sender-city",
          label: "City",
        },
        {
          type: "text",
          placeholder: "Enter State Name",
          name: "sender-state",
          label: "State",
        },
        {
          type: "number",
          placeholder: "Enter Your Pin Code",
          name: "sender-pin-num",
          label: "ZIP",
        },
        {
          type: "email",
          placeholder: "Enter Your Email",
          name: "sender-email-address",
          label: "Email Address",
        },
        {
          type: "number",
          placeholder: "Enter Your Phone Number",
          name: "sender-number",
          label: "Phone Number",
        },
        {
          type: "date",
          placeholder: "Enter a Date",
          name: "sender-date",
          label: "Date",
        },
        {
          type: "text",
          placeholder: "Enter a Recipient's Name",
          name: "recipient-name",
          label: "Recipient's Name",
        },
        {
          type: "text",
          placeholder: "Enter a Recipient's Title",
          name: "recipient-title",
          label: "Recipient's Title",
        },
        {
          type: "text",
          placeholder: "Enter a Company/Organization",
          name: "company-organization",
          label: "Company/Organization",
        },
        {
          type: "text",
          placeholder: "Enter a Company Address",
          name: "company-address",
          label: "Company Address",
        },
        {
          type: "text",
          placeholder: "Enter a City",
          name: "company-city",
          label: "City",
        },
        {
          type: "text",
          placeholder: "Enter a State",
          name: "company-state",
          label: "State",
        },
        {
          type: "number",
          placeholder: "Enter a ZIP",
          name: "company-zip",
          label: "ZIP",
        },
        {
          type: "text",
          placeholder: "Enter a Prompt",
          name: "sender-prompt",
          label: "Prompt",
        },
        {
          type: "text",
          placeholder: "Enter Your Title",
          name: "sender-title",
          label: "Your Title (if applicable)",
        },
      ];
    return (
        <Form className="space-y-3 max-w-[500px] mx-auto pt-20">
        {formFields.map((item) => (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.label}</label>
            <Input
              className="mt-1"
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              id={item.name}
              required
            />
          </div>
        ))}
        <div className="flex justify-center">
          <Button  variant={"default"}>Generate with AI</Button>
        </div>
      </Form>

    )
}
export default GenerateLetter