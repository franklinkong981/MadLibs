import {listOfInputs, restOfStory} from "./MadLibsVariables.js";

function buildInitialFormValues(listOfInputs) {
  const initialFormValues = {};
  for (let input in listOfInputs) {
    initialFormValues[input.inputName] = '';
  }
  return initialFormValues;
}

function buildMadLibsStory(madLibsValues) {
  let madLibsStory = "";
  for (let i = 0; i < madLibsValues.length; i++) {
    const madLibToInsert = listOfInputs[i].inputName;
    madLibsStory += restOfStory[i] + madLibsValues[madLibToInsert];
    
    if (i == restOfstory.length - 1) madLibsStory += restOfStory[i + 1];
  }
  return madLibsStory;
}

export{buildInitialFormValues, buildMadLibsStory};