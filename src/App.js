import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function CalculatorApp() {
  return (
    <div>
      <Calculator />
      <Quotes />
    </div>
  );
}

export default CalculatorApp;
