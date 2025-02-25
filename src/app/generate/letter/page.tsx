
import LetterForm from "@/components/Letter/LetterForm";
import React from "react";
import "@/components/Letter/letter.css";
function LetterPage() {
  return (
    <div>
      <div className="no-print">
        <LetterForm />
      </div>
    </div>
  );
}

export default LetterPage;
