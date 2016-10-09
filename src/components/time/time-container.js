import React, { Component } from 'react';
import Time from './time';
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

    render() {
        return (
            <div>
                <h2>Time</h2>
                <Time time={ this.state.time.currentTime }></Time>
            </div>
        );
    }
}


export default TimeContainer;
