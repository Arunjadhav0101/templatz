"use client";
import Letter from "./Letter";
import LetterForm from "./LetterForm";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
function LetterContainer() {
  const [showLetter, setShowLetter] = useState(false);
  return (
    <div>
      <div className="container mx-auto w-full">
        <div className="no-print flex flex-wrap">
          <LetterForm />
        </div>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-screen h-screen fixed overflow-auto top-0 bg-background z-50"
          >
            <Button variant={"ghost"} onClick={() => setShowLetter(false)}>
              <ArrowLeft />
            </Button>
            <Letter />
          </motion.div>
        )}
      </div>
      <Button onClick={() => setShowLetter(true)}>dispatch</Button>
    </div>
  );
}

export default LetterContainer;
