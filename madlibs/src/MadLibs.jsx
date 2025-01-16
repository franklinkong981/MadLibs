import React, {useState} from "react";

import MadLibsForm from "./MadLibsForm.jsx";

const MadLibs = () => {
  const submitMadLibs = () => {
    alert("Madlibs submitted!");
  };

  return (
    <div className="MadLibs">
      <MadLibsForm submitMadLibs={submitMadLibs}/>
    </div>
  );
};

export default MadLibs;