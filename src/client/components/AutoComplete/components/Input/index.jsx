import React, { useState } from 'react';

const Input = ({ inputProps }) => {
  const { onInputChange } = inputProps;
  const [inputValue, setInputValue] = useState(null);
  const performChanges = event => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };
  return <input type="text" className="input" onChange={performChanges} />;
};

export default Input;
