"use client";

import { brawler } from "@/lib/fonts";
import LetterFormatSelector from "./Formates";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import "./letter.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LetterEditorNav from "../Navbar/letter-nav";
import { usePDF } from "react-to-pdf";
import React, { useState } from "react";
import { LetterType } from "./LetterType";

function Letter() {
  const letterState = useSelector((state: RootState) => state.letter);
  const { letter } = letterState;
  const { targetRef, toPDF } = usePDF({ filename: letter?.subject });
  const [format, setFormat] = useState<"format1" | "format2">("format2");
  return (
    <div className="container mx-auto w-full bg-background py-20 px-4 print:px-0 overflow-y-auto print:overflow-hidden print:py-0 fixed top-0 left-0 right-0 bottom-0 z-40 print:m-1">
      <div
        id="letter"
        className={clsx(
          " w-full flex flex-col gap-2 max-h-fit border-4 content mx-auto bg-background print:bg-white z-40 overflow-y-auto p-4 rounded-xl ",
          brawler.className
        )}
        ref={targetRef}
      >
        {letter ? (
          <LetterFormatSelector
            letterData={letter as LetterType}
            format={format}
          />
        ) : (
          <LetterSkeleton />
        )}
      </div>

      <LetterEditorNav toPDF={toPDF} setFormat={setFormat} className="" />
    </div>
  );
}

export default Letter;

const LetterSkeleton = () => (
  <>
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
  </>
);
