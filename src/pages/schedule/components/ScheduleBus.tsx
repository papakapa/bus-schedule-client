import React from 'react';
import {NavLink} from 'react-router-dom';

const ScheduleBus: React.FC = () => {
    return (
        <div className='schedule__bus'>
            <ol className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/schedule/main'>Schedule</NavLink>
                </li>
                <li className="nav-item active" >
                    <NavLink className="nav-link" to='/schedule/bus-number'>Bus Number</NavLink>
                </li>
            </ol>
            <h1>Bus Schedule</h1>
        </div>
);
};

export default ScheduleBus;
