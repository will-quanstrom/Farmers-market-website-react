import React from 'react';
import Proptyes from 'prop-types';

const Schedule = props => {
    return(
        <div className='dayBlocks'>
            <h6>{props.day}</h6>
            <ul>
                <li>{props.location}</li>
                <li>{props.hours}</li>
                <li>{props.booth}</li>
            </ul>
        </div>
    )
}

Schedule.PropTypes = {
    day: PropTypes.string,
    location: Proptyes.string,
    hours: Proptyes.string,
    booth: Proptyes.string
}

export default Schedule;