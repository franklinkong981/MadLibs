import React, {useState} from "react";

import MadLibsForm from "./MadLibsForm.jsx";

const MadLibs = () => {
  const [MadLibsValues, setMadLibsValues]= useState({});

  const submitMadLibs = (values) => {
    setMadLibsValues(values);
  };

  return (
    <div className="MadLibs">
      <MadLibsForm submitMadLibs={submitMadLibs}/>
    </div>
  );
};

export default MadLibs;