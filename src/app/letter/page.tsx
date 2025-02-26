"use client";
import React, { useState } from "react";
import "@/components/Letter/letter.css";
import LetterForm from "@/components/Letter/LetterForm";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Letter from "@/components/Letter/Letter";
import "@/components/Letter/letter.css";
import useLetter from "@/lib/letter/uesLetter";

const LetterPage: React.FC = () => {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div>
      <div className="container mx-auto w-full relative ">
        <div className="print:hidden flex flex-wrap">
          <LetterForm setShowLetter={setShowLetter} />
        </div>

        {showLetter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-screen h-screen fixed top-0 left-0 right-0 bg-background z-50"
          >
            <Letter />
            <Button
              variant={"secondary"}
              onClick={() => setShowLetter(false)}
              className="print:hidden absolute "
            >
              <ArrowLeft />
            </Button>
          </motion.div>
        )}
      </div>
      <Button className="print:hidden" onClick={() => setShowLetter(true)}>
        dispatch
      </Button>
    </div>
  );
};

export default useLetter(LetterPage);