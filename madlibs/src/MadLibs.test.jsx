/* This is the file that tests out the rendering and functionality of the top-level MadLibs component and is the main test file.
In addition to rendering successfully and matching the snapshot, this test also tests the functionality and user flow of the
MadLibs component. */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MadLibs from "./MadLibs.jsx";
import {listOfInputs, restOfStory} from "./MadLibsVariables.js";
import { expect } from "vitest";

describe("Test <MadLibs/> rendering", function () {
  it("renders without crashing", function() {
    render(<MadLibs/>);
  });
  it ("matches the snapshot for the MadLibs component", function() {
    const {asFragment} = render(<MadLibs/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Tests functionality and user flow of the MadLibs component/app", async function() {
  it ("Test that user can  fill out the form, submit it, and see the correct MadLibs story", async function() {
    const {getByLabelText, queryByText, findByText} = render(<MadLibs/>);

    //first, the form should be rendered but the MadLibsStory component containing the restart button should not be.
    let restartButton = queryByText("Restart");
    expect(restartButton).not.toBeInTheDocument();

    let submitButton = queryByText("Generate MadLibs!");
    expect(submitButton).toBeInTheDocument();
    
    const adjectiveInputField = getByLabelText("Enter an adjective");
    expect(adjectiveInputField).toBeInTheDocument();
    const firstNounInputField = getByLabelText("Enter a noun");
    expect(firstNounInputField).toBeInTheDocument();
    const colorInputField = getByLabelText("Enter a color");
    expect(colorInputField).toBeInTheDocument();
    const secondNounInputField = getByLabelText("Enter another noun");
    expect(secondNounInputField).toBeInTheDocument();

    //user changes input values and submits the form.
    fireEvent.change(adjectiveInputField, {target: {value: "lazy"}});
    fireEvent.change(firstNounInputField, {target: {value: "walrus"}});
    fireEvent.change(colorInputField, {target: {value: "pink"}});
    fireEvent.change(secondNounInputField, {target: {value: "iceberg"}});
    fireEvent.click(submitButton);

    //The MadLibsStory and the restart button should now be present and the form should be gone.
    restartButton = await findByText("Restart");
    expect(restartButton).toBeInTheDocument();
    const madLibsStory = queryByText("There was a lazy walrus who loved a pink iceberg.");
    expect(madLibsStory).toBeInTheDocument();

    //after user clicks Restart button, the MadLibsStory component should once again be gone and the form should be rendered.
    fireEvent.click(restartButton);
    submitButton = await findByText("Generate MadLibs!");
    expect(submitButton).toBeInTheDocument();
    expect(restartButton).not.toBeInTheDocument();
  });
});
