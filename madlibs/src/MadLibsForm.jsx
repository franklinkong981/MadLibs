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