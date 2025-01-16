import React, {useState} from "react";

import {buildMadLibsStory} from "./helper.js";

import MadLibsForm from "./MadLibsForm.jsx";
import MadLibsStory from "./MadLibsStory.jsx";

import useToggle from "./hooks/useToggle.jsx";

const MadLibs = () => {
  const [madLibsStory, setMadLibsStory]= useState("");
  const [isFormSubmitted, toggleIsFormSubmitted] = useToggle(false);

  const submitMadLibs = (values) => {
    setMadLibsStory(madLibsStory => buildMadLibsStory(values));
    toggleIsFormSubmitted();
  };

  return (
    <div className="MadLibs">
      <h1 className="MadLibs-header">MADLIBS!</h1>
      {isFormSubmitted ? (
        <MadLibsStory story={madLibsStory} reset={toggleIsFormSubmitted}/>
      ) : (
        <MadLibsForm listOfInputs={listOfInputs} submitMadLibs={submitMadLibs}/>
      )}
    </div>
  );
};

export default MadLibs;