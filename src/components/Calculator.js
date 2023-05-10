import React, { useState } from 'react';
import './calculator.css';
import Button from './Button';
import operate from '../logic/operate';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  function handleInput(input) {
    if (input === 'AC') {
      clearDisplay();
    } else if (input === '+/-') {
      toggleSign();
    } else if (input === '%') {
      inputPercent();
    } else if (input === '.') {
      inputDecimal();
    } else if (Number.isInteger(parseFloat(input))) {
      inputDigit(input);
    } else {
      performOperation(input);
    }
  }

  function clearDisplay() {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  }

  function toggleSign() {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(newValue.toString());
  }

  function inputPercent() {
    const currentValue = parseFloat(displayValue);
    if (currentValue === 0) {
      return;
    }
    const newValue = (currentValue / 100).toString();
    setDisplayValue(newValue);
  }

  function inputDecimal() {
    if (!displayValue.includes('.')) {
      setDisplayValue(`${displayValue}.`);
    }
  }

  function inputDigit(digit) {
    if (displayValue === '0' || waitingForSecondValue) {
      setDisplayValue(digit);
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue + digit);
    }
  }

  function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
      setOperator(nextOperator);
      setWaitingForSecondValue(true);
    } else if (operator) {
      const result = operate(firstValue, inputValue, operator);
      setDisplayValue(result);
      setFirstValue(result);
      setOperator(nextOperator);
      setWaitingForSecondValue(true);
    }
  }
  // render()
  return (
    <div className="Container">
      <div data-testid='calculator-display' className="Screen">{displayValue}</div>
      <div className="column">
        <Button className="white btn-style" label="AC" onClick={() => handleInput('AC')} />
        <Button className="white btn-style" label="+/-" onClick={() => handleInput('+/-')} />
        <Button className="white btn-style" label="%" onClick={() => handleInput('%')} />
        <Button className="orange btn-style" label="÷" onClick={() => handleInput('÷')} />
      </div>
      <div className="column">
        <Button className="white btn-style" label="7" onClick={() => handleInput('7')} />
        <Button className="white btn-style" label="8" onClick={() => handleInput('8')} />
        <Button className="white btn-style" label="9" onClick={() => handleInput('9')} />
        <Button className="orange btn-style" label="X" onClick={() => handleInput('x')} />
      </div>
      <div className="column">
        <Button className="white btn-style" label="4" onClick={() => handleInput('4')} />
        <Button className="white btn-style" label="5" onClick={() => handleInput('5')} />
        <Button className="white btn-style" label="6" onClick={() => handleInput('6')} />
        <Button className="orange btn-style" label="-" onClick={() => handleInput('-')} />
      </div>
      <div className="column">
        <Button className="white btn-style" label="1" onClick={() => handleInput('1')} />
        <Button className="white btn-style" label="2" onClick={() => handleInput('2')} />
        <Button className="white btn-style" label="3" onClick={() => handleInput('3')} />
        <Button className="orange btn-style" label="+" onClick={() => handleInput('+')} />
      </div>
      <div className="column">
        <Button className="zero btn-style" label="0" onClick={() => handleInput('0')} />
        <Button className="white btn-style" label="." onClick={() => handleInput('.')} />
        <Button className="orange btn-style" label="=" onClick={() => handleInput('=')} />
      </div>
    </div>
  );
}

export default Calculator;
