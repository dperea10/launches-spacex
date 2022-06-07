import {useState, useEffect} from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from '../../utils/timerMoment';
import { Card } from '@mui/material';
import { Container } from '@material-ui/core';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}:any) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown:any) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
       
        <Container>
            <Card className="countdown-timer">
                <span>{remainingTime.days}</span>
                <span>days</span>
                <span className="two-numbers">{remainingTime.hours}</span>
                <span>hours</span>
                <span className="two-numbers">{remainingTime.minutes}</span>
                <span>minutes</span>
                <span className="two-numbers">{remainingTime.seconds}</span>
                <span>seconds</span>
                </Card>
        </Container>
    );
}

export default CountdownTimer;