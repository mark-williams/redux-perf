import React from 'react';
import _ from 'lodash';

const Numbers = (props) => {

    let ns = [];
    for (let i = 1; i <= props.max; i++) {
        ns = [...ns, i];
    }

    const renderNumber = (n) => {
        const className = _.includes(props.selection, n) ? 'selected' : '';

        return (
            <span key={n} className={ className }>{ n }</span>
        );
    };

    return (
        <div>
            { ns.map(renderNumber.bind(this)) }
        </div>
    );
};

export default Numbers;
