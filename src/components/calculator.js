import React from 'react';
import './calculator.css';
import Button from './Button';

function Calculator() {
  return (
    <div className="Container">
      <div className="Screen">0</div>
      <div className="column">
        <Button className="white btn-style" label="AC" />
        <Button className="white btn-style" label="+/-" />
        <Button className="white btn-style" label="%" />
        <Button className="orange btn-style" label="÷" />
      </div>
      <div className="column">
        <Button className="white btn-style" label="7" />
        <Button className="white btn-style" label="8" />
        <Button className="white btn-style" label="9" />
        <Button className="orange btn-style" label="X" />
      </div>
      <div className="column">
        <Button className="white btn-style" label="4" />
        <Button className="white btn-style" label="5" />
        <Button className="white btn-style" label="6" />
        <Button className="orange btn-style" label="-" />
      </div>
      <div className="column">
        <Button className="white btn-style" label="1" />
        <Button className="white btn-style" label="2" />
        <Button className="white btn-style" label="3" />
        <Button className="orange btn-style" label="+" />
      </div>
      <div className="column">
        <Button className="white btn-style" id="zero" label="0" />
        <Button className="white btn-style" label="." />
        <Button className="orange btn-style" label="=" />
      </div>
    </div>
  );
}

export default Calculator;
