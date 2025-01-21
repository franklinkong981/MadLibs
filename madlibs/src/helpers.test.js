/* File that tests the functions in helpers.js to ensure that they work properly. */

import {buildInitialFormValues, buildMadLibsStory} from "./helpers.js";
import {listOfInputs, restOfStory} from "./MadLibsVariables.js";

describe("Tests buildInitialFormValues", function() {
  it("builds the proper form fields as intended", function() {
    let initialFormValues = buildInitialFormValues(listOfInputs);
    expect(initialFormValues.hasOwnProperty('adjective')).toBe(true);
    expect(initialFormValues['adjective']).toEqual('');
    expect(initialFormValues.hasOwnProperty('noun-1')).toBe(true);
    expect(initialFormValues['noun-1']).toEqual('');
    expect(initialFormValues.hasOwnProperty('color')).toBe(true);
    expect(initialFormValues['color']).toEqual('');
    expect(initialFormValues.hasOwnProperty('noun-2')).toBe(true);
    expect(initialFormValues['noun-2']).toEqual('');
  });
});

describe("Tests buildMadLibsStory", function() {
  it("constructs the expected MadLibs story from the inputs as intended", function() {
    const madLibsValues= {
      adjective: "fuzzy",
      "noun-1": "squirrel",
      color: "blue",
      "noun-2": "wheel"
    };
    const story = buildMadLibsStory(madLibsValues, listOfInputs, restOfStory);
    expect(story).toEqual("There was a fuzzy squirrel who loved a blue wheel.");
  });
});