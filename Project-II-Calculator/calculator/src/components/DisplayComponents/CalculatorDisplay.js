import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

ActionButton.defaultProps = {
    buttonStyle: 'default-red',
};

NumberButton.defaultProps = {
    buttonStyle: 'punch-pad'
}

const CalculatorDisplay = () => {
    return <div className = "center">

        <div className = "layout">
            <ActionButton buttonStyle = 'top-display' text = '0' />
        </div>

        <div className = "layout">
            <ActionButton buttonStyle = 'clear-button' text = 'clear' />
            <ActionButton buttonStyle = 'divide-button' text = ' / ' />
        </div>

        <div className = "layout">
            <NumberButton text = '1' /> 
            <NumberButton text = '2' />
            <NumberButton text = '3' />
            <ActionButton text = 'x' />
        </div>

        <div className = "layout">
            <NumberButton text = '4' />
            <NumberButton text = '5' />
            <NumberButton text = '6' />
            <ActionButton text = '-' />
        </div>

        <div className = "layout">
            <NumberButton text = '7' />
            <NumberButton text = '8' />
            <NumberButton text = '9' />
            <ActionButton text = '+' />
        </div>

        <div className = "layout">
            <NumberButton buttonStyle = 'zero-button' text = ' 0 ' />
            <ActionButton text = ' = '/>
        </div>

    </div>
}

export default CalculatorDisplay