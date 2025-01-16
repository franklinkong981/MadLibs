function buildInitialFormValues(listOfInputs) {
  const initialFormValues = {};
  for (let input in listOfInputs) {
    initialFormValues[input.inputName] = '';
  }
  return initialFormValues;
}

function buildMadLibsStory(madLibsValues, restOfStory) {
  let madLibsStory = "";
  for (let i = 0; i < madLibsValues.length; i++) {
    madLibsStory += restOfStory[i] + madLibsValues[i];
    if (i == madLibsValues.length - 1) madLibsStory += restOfStory[i + 1];
  }
  return madLibsStory;
}

export{buildInitialFormValues, buildMadLibsStory};