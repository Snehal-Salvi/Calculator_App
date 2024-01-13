// Display.jsx
import React from 'react';

// Component for the input display
const Display = ({ value }) => {
  return (
    <div className="display">
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default Display;