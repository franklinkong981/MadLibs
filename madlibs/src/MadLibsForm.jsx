/* This component is for the MadLibs form, where the list of inputs will be displayed and the user fills out an appropriate value for each.
Implemented using Formik, user will not be able to submit the form until all fields are non-empty. The inputted values will be passed up
to the parent MadLibs component to be stored in its madLibsValues state object. 

Props: listOfInputs: An object containing the label name and the inputName (aka name attribute value) of each input field on the form.
        submitMadLibs: The function to be run once the form is submitted that will take the inputted values and pass them up to the parent 
        MadLibs component to be stored as state.
        
State: None*/

import React from "react";
import {useFormik} from "formik";
import "./MadLibsForm.css";

import {buildInitialFormValues} from "./helpers.js";

const MadLibsForm = ({listOfInputs, submitMadLibs}) => {
  const validate = (values) => {
    const errors = {};
    for (let value in values) {
      if (!values[value]) errors[value] = "Required!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: buildInitialFormValues(listOfInputs),
    validate,
    //The two attributes below ensure that the validation function won't run until the user attempts to submit the form.
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      submitMadLibs(values);
    }
  });

  return (
    <form className="MadLibsForm" onSubmit={formik.handleSubmit}>
      <h2 className="MadLibsForm-instructions">Fill out each field in the form below to generate a funny sentence!</h2>
      {listOfInputs.map(input => (
        <div className="MadLibsForm-field form-group">
          <label htmlFor={`MadLibsForm-${input.inputName}-input`} className="MadLibsForm-label">{input.label}</label>
          <input id={`MadLibsForm-${input.inputName}-input`} className="MadLibsForm-input form-control" type="text" name={input.inputName}
          size="50" value={formik.values[input.inputName]} onChange={formik.handleChange}/>
          {formik.errors[input.inputName] ? <div className="MadLibsForm-error form-text">{formik.errors[input.inputName]}</div> : null}
        </div>
      ))}
      <button className="MadLibsForm-submit-button btn btn-primary" type="submit">Generate MadLibs!</button>
    </form>
  );
};

export default MadLibsForm;