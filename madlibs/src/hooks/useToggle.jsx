import React, {useState} from "react";

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    setState(state => !state);
  };

  return [state, toggleState];
};

export default useToggle;