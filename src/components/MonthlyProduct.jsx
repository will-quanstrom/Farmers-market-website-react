import React from 'react'
import PropTypes from 'prop-types';

const MonthlyProduct = props => {
    const asideStyle = {
        padding: '10px'
    }
    return (
        <div>
            <h5 style={asideStyle}>{props.month}</h5>
            <ul>
                {props.selection.map((item, index) =>
                    <li key={index}>{item}</li>    
                )}
            </ul>
        </div>
    )
}

MonthlyProduct.PropTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array.isRequired
}

export default MonthlyProduct