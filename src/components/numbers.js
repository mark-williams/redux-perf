import React, { Component } from 'react';
import _ from 'lodash';

class Numbers extends Component {

    constructor(props) {
        super();
        let ns = [];
        let max = props.max;
        for (let i=1; i <= max; i++) {
            ns = [...ns, i];
        }
        this.state = { numbers: ns, selection: props.selection };

        console.log('Render numbers');
    }

    renderNumber(n) {
        let c = _.includes(this.props.selection, n) ? 'selected' : '';
        return <span key={n} className={ c }>{ n }</span>
    }

    render() {
        return (
            <div>
                { this.state.numbers.map(this.renderNumber.bind(this)) }
            </div>
        );
    }
}

export default Numbers;