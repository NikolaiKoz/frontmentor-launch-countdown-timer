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
        <div className="Timer">
            <span className="Timer-days">{timeRemaining.days}</span>
            <span className="Timer-hours">{timeRemaining.hours}</span>
            <span className="Timer-minutes">{timeRemaining.minutes}</span>
            <span className="Timer-seconds">{timeRemaining.seconds}</span>
        </div>
    );
}

export default App;
