import React, { useState, useEffect } from "react";


import { useForm } from 'react-hook-form';

const TimeoutScreen = (props) => {
    const { history } = props;
    const [pin, setPin] = useState("");

    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [btnDisabled, setBtnDisabled] = useState(true)
    const displayPin = () => {
        let _pin = [];

        if (pin.length > 0) {

            _pin = pin.split("");

            var x = _pin.length;

            switch (x) {
                case 1:
                    return (
                        <div className='pin'>
                            {
                                _pin.map((val, i) => <span key={`${val}_${i} `}>{val}</span>)
                            }
                            <span key={1}>_</span>
                            <span key={2}>_</span>
                            <span key={3}>_</span>
                        </div>
                    );
                case 2:
                    return (
                        <div className='pin'>
                            {
                                _pin.map((val, i) => <span key={`${val}_${i} `}>{val}</span>)
                            }
                            <span key={1}>_</span>
                            <span key={2}>_</span>
                        </div>
                    );
                case 3:
                    return (
                        <div className='pin'>
                            {
                                _pin.map((val, i) => <span key={`${val}_${i} `}>{val}</span>)
                            }
                            <span>_</span>

                        </div>
                    );
                default:
                    return (
                        <div className='pin'>
                            {
                                _pin.map((val, i) => <span key={`${val}_${i} `}>{val}</span>)
                            }
                        </div>
                    );
            }
        }
        else {
            return (
                <div className='pin'>
                    <span>_</span>
                    <span>_</span>
                    <span>_</span>
                    <span>_</span>
                </div>
            )
        }

    }

    useEffect(() => {
        if (pin.length === 4) {
            setBtnDisabled(false)
        } else if (pin.length > 4) {
            setPin("");
            setBtnDisabled(true);
        }
    }, [pin.length])

    const updatePin = (e, val) => {
        if (pin.length < 4) {
            e.preventDefault();
            setPin(pin.concat(val))
        }
    }

    const handleSendPin = (e, _pin) => {
        e.preventDefault();
        history.push('/dashboard')
    }
    const clearDisplay = (e) => {
        e.preventDefault();
        return setPin("");
    }
    console.log()
    const numPad = () => (
        <div className='num-pad'>
            <button className='context-btn' onClick={clearDisplay}>clear</button >
            <button disabled={btnDisabled} className='context-btn'>done</button >
            {
                buttons.map((val) =>
                    <button key={val.toString()} id={val} onClick={(e) => updatePin(e, val)} className={`num-btn`}>{val}</button>
                )
            }
        </div>
    );

    return (
        <div className="timeout-screen">
            <form className="pin-pad" onSubmit={(e) => handleSendPin(e, pin)}>
                <div className="display">
                    {displayPin()}
                </div>
                {numPad()}
            </form>
        </div>
    );
};

export default TimeoutScreen;