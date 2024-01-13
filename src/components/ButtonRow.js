// ButtonRow.jsx
import React from 'react';
import CalculatorButton from './CalculatorButton';

// Component for a row of calculator buttons
const ButtonRow = ({ buttons, onButtonClick }) => {
  return (
    <div>
      {buttons.map((button) => (
        <CalculatorButton key={button} value={button} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
};

export default ButtonRow;