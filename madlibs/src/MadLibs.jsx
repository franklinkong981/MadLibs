import React, {useState} from "react";

import {listOfInputs, restOfStory} from "./MadLibsVariables.js";

import MadLibsForm from "./MadLibsForm.jsx";
import MadLibsStory from "./MadLibsStory.jsx";

import useToggle from "./hooks/useToggle.jsx";

const MadLibs = () => {
  const [madLibsValues, setMadLibsValues] = useState({});
  const [isFormSubmitted, toggleIsFormSubmitted] = useToggle(false);

  const submitMadLibs = (values) => {
    setMadLibsValues(madLibsValues => values);
    toggleIsFormSubmitted();
  };

  const restart = () => {
    toggleIsFormSubmitted();
  }

  return (
    <div className="MadLibs">
      <h1 className="MadLibs-header">MADLIBS!</h1>
      {isFormSubmitted ? (
        <MadLibsStory values={madLibsValues} listOfInputs={listOfInputs} restOfStory={restOfStory} restart={restart}/>
      ) : (
        <MadLibsForm listOfInputs={listOfInputs} submitMadLibs={submitMadLibs}/>
      )}
    </div>
  );
};

export default MadLibs;