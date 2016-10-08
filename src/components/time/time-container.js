import React, { Component } from 'react';
import store from '../../store/store';
import { UPDATETIME } from '../../actions/actions';

class TimeContainer extends Component {
    constructor(props) {
        super(props);
        this.store = store;

        this.state = this.store.getState();
        this.store.subscribe(this.onStoreUpdate.bind(this));

        setInterval(() => {
            this.store.dispatch({ type: UPDATETIME });
        }, 10);
    }

    onStoreUpdate() {
        this.setState(this.store.getState());
    }

    renderTime(time) {
        const hours = this.zeroPad(time.getHours());
        const mins = this.zeroPad(time.getMinutes());
        const secs = this.zeroPad(time.getSeconds());
        const millis = time.getMilliseconds();

        return `${hours}:${mins}:${secs}:${millis}`;
    }

    zeroPad(number) {
        if (number === 0) {
            return '00';
        }

        return number < 10 ? `0${number}` : number;
    }

    render() {
        return <div>
                    <h2>Time</h2>
                    <div className="time">{ this.renderTime(this.state.time.currentTime) }</div>
                </div>;
    }
}


export default TimeContainer;
