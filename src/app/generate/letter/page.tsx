"use client";

import React from "react";
import "@/components/Letter/letter.css";
import LetterContainer from "@/components/Letter/LetterContainer";
import { Provider } from "react-redux";
import store from "@/store/store";
function LetterPage() {
  return (
    <div>
      <Provider store={store}>
        <LetterContainer />
      </Provider>
    </div>
  );
}

export default LetterPage;
