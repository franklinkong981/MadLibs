function buildInitialFormValues(listOfInputs) {
  const initialFormValues = {};
  for (let input of listOfInputs) {
    initialFormValues[input.inputName] = '';
  }
  return initialFormValues;
}

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