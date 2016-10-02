import React, { Component } from 'react';

class Numbers extends Component {

    constructor(props) {
        super();
        let ns = [];
        let max = props.max;
        for (let i=1; i <= max; i++) {
            ns = [...ns, i];
        }
        this.state = { numbers: ns };
    }

    renderNumber(n) {
        return <span key={n}>{ n }&nbsp;</span>
    }

    render() {
        return (
            <p>
                { this.state.numbers.map(this.renderNumber.bind(this)) }
            </p>
        );
    }
}

export default Numbers;