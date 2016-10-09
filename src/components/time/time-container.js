import React, { Component } from 'react';
import { updateTime } from '../../actions/actions';

class TimeContainer extends Component {
    constructor(props) {
        super(props);

        const { store } = props;

        this.state = store.getState();
        store.subscribe(this.onStoreUpdate.bind(this));
    }

    componentDidMount() {
        setInterval(() => {
            this.props.store.dispatch(updateTime());
        }, 10);
    }

    onStoreUpdate() {
        this.setState(this.props.store.getState());
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
