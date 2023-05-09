import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navebar from './components/Navbar';

function CalculatorApp() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default CalculatorApp;
