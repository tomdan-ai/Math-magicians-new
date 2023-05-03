import React from 'react';
import './button.css';

function Button(props) {
  // Destructure props into separate variables for easier use
  const { className, label, onClick } = props;

  // Render the button with the given className, label, and onClick function (if provided)
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;