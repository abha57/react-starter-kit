import React, { useState, memo } from 'react';

const Input = ({ onInputChange }) => {
  // const { onInputChange } = inputProps;
  const [inputValue, setInputValue] = useState(null);
  const performChanges = event => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };
  return <input type="text" className="input" onChange={performChanges} />;
};

export default memo(Input);
