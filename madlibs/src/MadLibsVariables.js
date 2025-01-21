/* This file contains the different parts of the MadLibs story, including the list of inputs the user has to input, the name
attributes to be given to each input field, and the rest of the story that isn't influenced by the user. */

//Used to build the MadLibs Form. Each object corresponds to an input field in the form and contains the label content and inputName aka the name attribute of the input field.
const listOfInputs = [
  {label: "Enter an adjective", inputName: "adjective"},
  {label: "Enter a noun", inputName: "noun-1"},
  {label: "Enter a color", inputName: "color"},
  {label: "Enter another noun", inputName: "noun-2"}
];

//The array that contains the parts of the MadLib story not dependent on user input.
const restOfStory = ["There was a ", " ", " who loved a ", " ", "."];

export {listOfInputs, restOfStory};