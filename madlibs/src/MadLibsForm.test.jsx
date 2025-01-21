/* This is the test file for the MadLibsForm component, it tests that the component is able to render successfully and match the snapshot. */

import React from "react";
import { render, fireEvent} from "@testing-library/react";
import MadLibsForm from "./MadLibsForm.jsx";
import {listOfInputs} from "./MadLibsVariables.js";

//dummy function so all props can be passed in.
const submitMadLibs = () => {
  console.log("Form successfully submitted!");
};

describe("Test <MadLibsForm /> rendering", function () {
  it("renders without crashing", function() {
    render(<MadLibsForm listOfInputs={listOfInputs} submitMadLibs={submitMadLibs}/>);
  });
  it ("matches the snapshot for the MadLibsForm", function() {
    const {asFragment} = render(<MadLibsForm listOfInputs={listOfInputs} submitMadLibs={submitMadLibs}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Tests functionality of MadLibsForm", async function() {
  it ("Test that user can change input fields and the form properly validates.", async function() {
    const {getByLabelText, queryByText, findByText} = render(<MadLibsForm listOfInputs={listOfInputs} submitMadLibs={submitMadLibs}/>);

    const submitButton = queryByText("Generate MadLibs!");
    expect(submitButton).toBeInTheDocument();
    //make sure all form input field values start off as an empty string.
    const adjectiveInputField = getByLabelText("Enter an adjective");
    expect(adjectiveInputField).toBeInTheDocument();
    expect(adjectiveInputField.value).toEqual("");
    const firstNounInputField = getByLabelText("Enter a noun");
    expect(firstNounInputField).toBeInTheDocument();
    expect(firstNounInputField.value).toEqual("");
    const colorInputField = getByLabelText("Enter a color");
    expect(colorInputField).toBeInTheDocument();
    expect(colorInputField.value).toEqual("");
    const secondNounInputField = getByLabelText("Enter another noun");
    expect(secondNounInputField).toBeInTheDocument();
    expect(secondNounInputField.value).toEqual("");

    //make sure user can change input values.
    fireEvent.change(adjectiveInputField, {target: {value: "lazy"}});
    expect(adjectiveInputField.value).toEqual("lazy");

    fireEvent.change(firstNounInputField, {target: {value: "walrus"}});
    fireEvent.change(colorInputField, {target: {value: "pink"}});

    //The last input field for the second noun hasn't filled out, test validation works when user tries to submit the form.
    fireEvent.click(submitButton);
    const errorLine = await findByText("Required!");
    expect(errorLine).toBeInTheDocument();
  });
});


