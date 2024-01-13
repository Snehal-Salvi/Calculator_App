// CalculatorButton.jsx
import React from 'react';

// Individual calculator button component
const CalculatorButton = ({ value, onButtonClick }) => {
  return <input type="button" value={value} onClick={() => onButtonClick(value)} />;
};

export default CalculatorButton;