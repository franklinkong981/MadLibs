import React from "react";

const MadLibsStory = ({story}) => {
  return (
    <div className="MadLibsStory">
      <h2 className="MadLibsStory-header">Your MadLibs Story:</h2>
      <p className="MadLibsStory-story">{story}</p>
    </div>
  );
};

export default MadLibsStory;