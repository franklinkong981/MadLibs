import React from "react";

import {buildMadLibsStory} from "./helpers.js";

const MadLibsStory = ({values, listOfInputs, restOfStory}) => {
  return (
    <div className="MadLibsStory">
      <h2 className="MadLibsStory-header">Your MadLibs Story:</h2>
      <p className="MadLibsStory-story">{buildMadLibsStory(values, listOfInputs, restOfStory)}</p>
    </div>
  );
};

export default MadLibsStory;