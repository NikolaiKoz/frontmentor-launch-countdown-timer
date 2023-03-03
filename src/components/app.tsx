import React, { useState, useEffect } from "react";
import "../styles/scss/App.scss";
import { time } from '../interfaces/time';

function App () {
    const [timeRemaining, setTimeRemaining] = useState<time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countdownDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = countdownDate.getTime() - now.getTime();
            const remainingTime: time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
            setTimeRemaining(remainingTime);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="countdown">
            <span className="days time-element">
                <span className="top">0</span>
                <span className="top-back">
                    <span>0</span>
                </span>
                <span className="buttom">0</span>
                <span className="buttom-back">
                    <span>0</span>
                </span>
            </span>

            <span className="hours time-element">
                <span className="top">0</span>
                <span className="top-back">
                    <span>0</span>
                </span>
                <span className="buttom">0</span>
                <span className="buttom-back">
                    <span>0</span>
                </span>
            </span>

            <span className="minutes time-element">
                <span className="top">0</span>
                <span className="top-back">
                    <span>0</span>
                </span>
                <span className="buttom">0</span>
                <span className="buttom-back">
                    <span>0</span>
                </span>
            </span>

            <span className="seconds time-element">
                <span className="top">0</span>
                <span className="top-back">
                    <span>0</span>
                </span>
                <span className="buttom">0</span>
                <span className="buttom-back">
                    <span>0</span>
                </span>
            </span>
        </div>
    );
}

export default App;
