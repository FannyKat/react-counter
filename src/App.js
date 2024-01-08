import { React, useState } from 'react'
import FibonacciAlert from './components/Snackbar';
import Threshold from './components/Threshold';
import { ButtonGroup, Button } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import './styles/Button.css'
import './styles/App.css'


function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return (s * s == x);
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
}

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

  const reset = () => {
    setCounter(0)
  }

  const counterColorClass = isFibonacci(counter) ? 'fibonacci' : 'non-fibonacci';

  return (
    <>
      <div className="counter">
        <span className="counter__output">
          <ButtonGroup size="large" color="secondary" aria-label="large button group" >
            <Button onClick={decrease}><RemoveIcon fontSize='large'/></Button>
            <h1 className={counterColorClass}>{counter}</h1>
            <Button onClick={increase}><AddRoundedIcon fontSize='large'/></Button>
          </ButtonGroup>
        </span>
        <Threshold counter={counter}/>
        <Button className="reset" onClick={reset} variant="contained">Reset</Button>
      </div>
      <FibonacciAlert className="fibonnaci-alert" isOpen={isFibonacci(counter)} />
    </>
  );
}