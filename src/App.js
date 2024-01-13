import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import './App.css';

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'DEL') {
      // Delete the last character
      setValue((prevValue) => prevValue.slice(0, -1));
    } else if (buttonValue === 'AC') {
      // Clear the input
      setValue("");
    } else {
      setValue((prevValue) => prevValue + buttonValue);
    }
  };

  const handleEquals = () => {
    try {
      // Perform percentage calculation by replacing '%' with '*0.01'
      const result = eval(value.replace(/%/g, '*0.01'));
      setValue(result.toString());
    } catch (error) {
      // Handle errors if the expression is invalid
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Calculator App</h1>
      <div className="calculator">
        <CalculatorForm value={value} handleButtonClick={handleButtonClick} handleEquals={handleEquals} />
      </div>
    </div>
  );
}

export default App;