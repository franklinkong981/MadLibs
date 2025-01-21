/* Component that displays the finished MadLibs story based on the user-inputted values from the MadLibs form. 
  
Props: values = the object containing the different values that the user inputted.
      listOfInputs = array of objects showing the order of user-inputted values to be inserted into the MadLibs story.
      restOfStory = an array showing the different parts of the story not dependent on user input. User-inputted values will be inserted
      between different parts in this array.
      restart = Restart function that will be run when user clicks on the Restart button that will allow them to input new values.

      State: None*/

import React from "react";
import "./MadLibsStory.css";

import {buildMadLibsStory} from "./helpers.js";

const MadLibsStory = ({values, listOfInputs, restOfStory, restart}) => {
  return (
    <div className="MadLibsStory">
      <h2 className="MadLibsStory-header">Your MadLibs Story:</h2>
      <p className="MadLibsStory-story">{buildMadLibsStory(values, listOfInputs, restOfStory)}</p>
      <button className="MadLibsStory-restart-button" onClick={restart}>Restart</button>
    </div>
  );
};

export default MadLibsStory;