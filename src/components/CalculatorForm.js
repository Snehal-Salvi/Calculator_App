// CalculatorForm.jsx
import React from 'react';
import Display from './Display';
import ButtonRow from './ButtonRow';
import CalculatorButton from './CalculatorButton';

// Component for the calculator form
const CalculatorForm = ({ value, handleButtonClick, handleEquals }) => {
  return (
    <form action="">
      <Display value={value} />
      <ButtonRow buttons={['AC', 'DEL', '.', '%']} onButtonClick={handleButtonClick} />
      <ButtonRow buttons={['7', '8', '9', '/']} onButtonClick={handleButtonClick} />
      <ButtonRow buttons={['4', '5', '6', '*']} onButtonClick={handleButtonClick} />
      <ButtonRow buttons={['1', '2', '3', '-']} onButtonClick={handleButtonClick} />
      <div>
        <CalculatorButton value="0" onButtonClick={handleButtonClick} />
        <input type="button" className="equalbutton" value="=" onClick={handleEquals} />
        <CalculatorButton value="+" onButtonClick={handleButtonClick} />
      </div>
    </form>
  );
};

export default CalculatorForm;