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
    return <div>

        <div className = "layout">
            <ActionButton buttonStyle = 'top-button' />
        </div>

        <div className = "layout">
            <ActionButton buttonStyle = 'clear-button' />
            <ActionButton buttonStyle = 'divide-button' />
        </div>

        <div className = "layout">
            <NumberButton /> 
            <NumberButton />
            <NumberButton />
            <ActionButton/>
        </div>

        <div className = "layout">
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <ActionButton/>
        </div>

        <div className = "layout">
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <ActionButton />
        </div>

        <div className = "layout">
            <NumberButton />
            <ActionButton />
        </div>

    </div>
}

export default CalculatorDisplay