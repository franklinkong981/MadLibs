/* This is the test file for the MadLibsForm component, it tests that the component is able to render successfully and match the snapshot. */

import React from "react";
import { render} from "@testing-library/react";
import MadLibsStory from "./MadLibsStory.jsx";
import {listOfInputs, restOfStory} from "./MadLibsVariables.js";
import { expect } from "vitest";

const madLibsValues= {
  adjective: "fuzzy",
  "noun-1": "squirrel",
  color: "blue",
  "noun-2": "wheel"
};

//dummy function so all props are defined.
const restart = () => {
  console.log("MadLibs restart");
};

describe("Test <MadLibsStory /> rendering", function () {
  it("renders without crashing", function() {
    render(<MadLibsStory values={madLibsValues} listOfInputs={listOfInputs} restOfStory={restOfStory} restart={restart}/>);
  });
  it ("matches the snapshot for the MadLibsStory", function() {
    const {asFragment} = render(<MadLibsStory values={madLibsValues} listOfInputs={listOfInputs} restOfStory={restOfStory} restart={restart}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Tests that each component of MadLibsStory renders properly", async function() {
  it ("Test that the proper MadLibs story text and restart button are rendered.", async function() {
    const {queryByText} = render(<MadLibsStory values={madLibsValues} listOfInputs={listOfInputs} restOfStory={restOfStory} restart={restart}/>);

    const restartButton = queryByText("Restart");
    expect(restartButton).toBeInTheDocument();
    const madLibsStory = queryByText("There was a fuzzy squirrel who loved a blue wheel.");
    expect(madLibsStory).toBeInTheDocument();
  });
});

