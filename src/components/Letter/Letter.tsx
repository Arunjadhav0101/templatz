"use client";

import { brawler } from "@/lib/fonts";
import { LetterFormat1 } from "./Formates";
import { Skeleton } from "@/components/ui/skeleton"

import clsx from "clsx";
import "./letter.css"
const sampleLetter = {
  sender: {
    name: "Rameshwar Patil",
    address: [
      "SYBCA(science) Div B Roll no : [ROLL_NO],",
      "Dr.DY Patil Arts Commerce & Science Pimpri Pune, Maharastra, 411018",
    ],
    phone: "9890472354",
    email: "rameshwarpatil9689@gmail.com",
  },
  date: "October 26, 2023",
  recipient: {
    name: "Dr Ranjit Patil",
    title: "Principal",
    company: "Dr.DY Patil Arts Commerce & Science Pimpri Pune",
    address: "Sant Tukram Nagar, Pimpri, Maharastra, 411018",
  },
  subject: "Leave Application",
  greeting: "Respected Dr Ranjit Patil",
  body: [
    "I am writing to request a leave of absence from college.",
    "I need to be absent from college for [Number] days, from [Start Date] to [End Date], due to [Reason for Leave].",
    "I will ensure to catch up on any missed coursework upon my return.",
  ],
  closing: "Yours sincerely",
  sender_details: {
    name: "Rameshwar Patil",
    title: "Student",
  },
};
function Letter() {
  return (
      <div
        id="letter"
        className={clsx(
          "flex flex-col gap-2 border content mx-auto bg-background z-50 ",
          brawler.className
        )}
      >
      {/* <LetterFormat1 letterData={sampleLetter} /> */}
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      <br />
      <Skeleton className="w-[90%] h-[20px] rounded-full" />
      <Skeleton className="w-full h-[20px] rounded-full" />
      <Skeleton className="w-full h-[20px] rounded-full" />
      <br />
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      <Skeleton className="w-[200px] h-[20px] rounded-full" />
      </div>
  );
}

export default Letter;
