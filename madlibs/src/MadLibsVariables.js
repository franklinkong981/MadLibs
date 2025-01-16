/* This file contains the different parts of the MadLibs story, including the list of inputs the user has to input, the name
attributes to be given to each input field, and the rest of the story that isn't influenced by the user. */

const listOfInputs = [
  {label: "Enter a noun", inputName: "noun-1"},
  {label: "Enter another noun", inputName: "noun-2"},
  {label: "Enter an adjective", inputName: "adjective"},
  {label: "Enter a color", inputName: "color"}
];

const restOfStory = ["There was a ", " ", " who loved a ", " ", "."];

export {listOfInputs, restOfStory};