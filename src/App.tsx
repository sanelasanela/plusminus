import  { useState } from 'react';
import React from "react";


interface NumberComponentProps {
    number: number;
}
interface NumberListProps {
    start: number;
    end: number;
}
const NumberComponent: React.FC<NumberComponentProps> = ({ number }) => {
    let displayText: string | number = number;
    if (number % 3 === 0 && number % 5 === 0) {
        displayText = 'drei und 5';
    } else if (number % 3 === 0) {
        displayText = 'drei';
    } else if (number % 5 === 0) {
        displayText = 'fünf';
    }

    return <div>{displayText}</div>;
};

const NumberList: React.FC<NumberListProps> = ({ start, end }) => {
    const numbers: number[] = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return (
        <ul>
            {numbers.map((number, index) => (
                <li key={index}>
                    <NumberComponent number={number} />
                </li>
            ))}
        </ul>
    );
};

const App = () => {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(100);

    const handleMinusClick = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    const handlePlusClick = () => {
        if (end < 100) {
            setStart(start + 1);
            setEnd(end + 1);
        }
    };

    return (
        <div >
                <h1>0</h1>
                <h2>0</h2>


            <button onClick={handleMinusClick}>-</button>
            <button onClick={handlePlusClick}>+</button>
          <NumberList start={start} end={end} />
         </div>

    );
};

export default App;