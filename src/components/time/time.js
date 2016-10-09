import React from 'react';

const zeroPad = (number) => {
    if (number === 0) {
        return '00';
    }

    return number < 10 ? `0${number}` : number;
};

const renderTime = (time) => {
    const hours = zeroPad(time.getHours());
    const mins = zeroPad(time.getMinutes());
    const secs = zeroPad(time.getSeconds());
    const millis = time.getMilliseconds();

    return `${hours}:${mins}:${secs}:${millis}`;
};

const Time = (props) => (
    <span className="current-time">{ renderTime(props.time) }</span>
);

export default Time;

