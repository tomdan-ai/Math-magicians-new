import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="Container">
      <div className="Screen">0</div>
      <div className="column">
        <button type="button" className="white btn-style">AC</button>
        <button type="button" className="white btn-style">+/-</button>
        <button type="button" className="white btn-style">%</button>
        <button type="button" className="orange btn-style">÷</button>

      </div>
      <div className="column">
        <button type="button" className="white btn-style">7</button>
        <button type="button" className="white btn-style">8</button>
        <button type="button" className="white btn-style">9</button>
        <button type="button" className="orange btn-style">X</button>
      </div>
      <div className="column">
        <button type="button" className="white btn-style">4</button>
        <button type="button" className="white btn-style">5</button>
        <button type="button" className="white btn-style">6</button>
        <button type="button" className="orange btn-style">-</button>
      </div>
      <div className="column">
        <button type="button" className="white btn-style">1</button>
        <button type="button" className="white btn-style">2</button>
        <button type="button" className="white btn-style">3</button>
        <button type="button" className="orange btn-style">+</button>
      </div>
      <div className="column">
        <button type="button" className="white btn-style" id="zero">0</button>
        <button type="button" className="white btn-style">.</button>
        <button type="button" className="orange btn-style">=</button>
      </div>
    </div>
  );
}

export default Calculator;
