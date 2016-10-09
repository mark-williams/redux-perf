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

const Time = (props) => {
    return (
        <div>
            <h3>Time</h3>
            <span className="current-time">{ renderTime(props.time) }</span>
        </div>
    );
};

export default Time;

