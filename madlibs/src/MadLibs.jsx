/* The top-level MadLibs component. 
Props: None
State: madLibsValues = list of values the user inputted into the MadLibs form.
      isFormSubmitted = false: display form for user to input values. After user submits form, isFormSubmitted = true and MadLibs story is displayed.*/

import React, {useState} from "react";
import "./MadLibs.css";

import {listOfInputs, restOfStory} from "./MadLibsVariables.js";

import MadLibsForm from "./MadLibsForm.jsx";
import MadLibsStory from "./MadLibsStory.jsx";

import useToggle from "./hooks/useToggle.jsx";

const MadLibs = () => {
  const [madLibsValues, setMadLibsValues] = useState({});
  //hook that automatically toggles the state value from false --> true or true--> false when toggleIsFormSubmitted is run.
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
      <h1 className="MadLibs-header display-1">MADLIBS!</h1>
      {isFormSubmitted ? (
        <MadLibsStory values={madLibsValues} listOfInputs={listOfInputs} restOfStory={restOfStory} restart={restart}/>
      ) : (
        <MadLibsForm listOfInputs={listOfInputs} submitMadLibs={submitMadLibs}/>
      )}
    </div>
  );
};

export default MadLibs;