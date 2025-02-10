import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Form, useActionData } from "@remix-run/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {  ActionFunctionArgs } from "@remix-run/node";
import { generateLetter } from "~/lib/genai/generateLetter";

import { LetterType } from "~/lib/genai/letterType";
function GenerateLetter() {
  const letter = useActionData<{response:LetterType}>()
  const details = [
    {
      title: "Sender details",
      fields: [
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
          name: "sender-zip",
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
          type: "text",
          placeholder: "Enter Your Title",
          name: "sender-title",
          label: "Your Title (if applicable)",
        },
      ],
    },
    {
      title: "Receiver details",
      fields: [
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
      ],
    },
    {
      title: "Letter details",
      fields: [
        {
          type: "text",
          placeholder: "Enter a Prompt",
          name: "sender-prompt",
          label: "Prompt",
        },
        {
          type: "date",
          placeholder: "Enter a Date",
          name: "sender-date",
          label: "Date",
        },
      ],
    },
  ];
  return (
    <>
    <Form className="space-y-3 max-w-[500px] mx-auto pt-2" method="post" >
      {details.map((value) => {
        return (
          <Card key={value.title}>
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {value.fields.map((field) => {
                return (
                  <div key={field.name}>
                    <label htmlFor={field.name}> {field.label}:</label>
                    <Input
                      className="mt-1"
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      id={field.name}
                      defaultValue={""}
                      required
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        );
      })}

      <div className="flex justify-center">
        <Button variant={"default"}>Generate with AI</Button>
      </div>
    </Form>
    </>
  );
}
export default GenerateLetter;


export async function action({request} : ActionFunctionArgs ){
  console.log('submmited')
  const formData = await request.formData();
  let promptStr = "";
  for(let [name, value] of formData.entries()){
    promptStr+=`${name} : ${value}\n`
  }
  const letter = await generateLetter(promptStr)
  return letter;
}


