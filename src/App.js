import { useState } from 'react';
import './App.css';

function App() {
  // State to store the current input value
  const [value, setValue] = useState("");

  // Function to handle button clicks and update the input value
  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  // Function to clear the input value
  const handleClear = () => {
    setValue("");
  };

  // Function to delete the last character in the input value
  const handleDelete = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  // Function to handle the equals button click and perform calculations
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
      {/* Heading for the calculator app */}
      <h1 className="heading">Calculator App</h1>

      {/* Calculator container */}
      <div className="calculator">
        <form action="">
          {/* Display input field */}
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>

          {/* Button rows */}
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DEL" onClick={handleDelete} />
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" value="%" onClick={() => handleButtonClick('%')} />
          </div>

          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          </div>

          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" value="6" onClick={() => handleButtonClick('6')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} />
          </div>

          <div>
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" value="2" onClick={() => handleButtonClick('2')} />
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />
            <input type="button" value="-" onClick={() => handleButtonClick('-')} />
          </div>

          <div>
            <input type="button" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" className="equalbutton" value="=" onClick={handleEquals} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
