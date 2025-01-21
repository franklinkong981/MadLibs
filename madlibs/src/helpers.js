/* This file contains helper functions that will be called within the components in the MadLibs app. */

// Builds the empty MadLibs Form. listOfInputs is an array of objects, each object contains the label content of each input field and the name attribute of each input field.
function buildInitialFormValues(listOfInputs) {
  const initialFormValues = {};
  for (let input of listOfInputs) {
    initialFormValues[input.inputName] = '';
  }
  return initialFormValues;
}

/* Constructs the whole MadLibs story. 
 listOfInputs is an array of objects that determines the order of the user-inputted values to insert into the story.
 madLibsValues is an object that contains the different input names as keys and the inputted values by the user as their respective values.
 restOfStory is an array containing the different parts of the MadLibs story that don't depend on user input. */
function buildMadLibsStory(madLibsValues, listOfInputs, restOfStory) {
  let madLibsStory = "";
  for (let i = 0; i < restOfStory.length; i++) {
    if (i == restOfStory.length - 1) madLibsStory += restOfStory[i];
    else {
      const madLibToInsert = listOfInputs[i].inputName;
      madLibsStory += restOfStory[i] + madLibsValues[madLibToInsert];
    }
  }
  return madLibsStory;
}

export{buildInitialFormValues, buildMadLibsStory};