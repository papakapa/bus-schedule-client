import React from 'react';
import {NavLink} from "react-router-dom";

const ScheduleStop: React.FC = () => {
    return (
        <div className='schedule__stop'>
            <NavLink to='/schedule/main' className='btn btn-dark'>Back</NavLink>
            <h1>Schedule Stop</h1>
        </div>

    );
};

export default ScheduleStop;
