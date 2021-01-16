import React, {useCallback} from 'react';
import {NavLink} from 'react-router-dom';

const ScheduleBus: React.FC = () => {
    const bus = [{
        number:1,
        route: 'Вишневец - Азот'
    },{
        number:2,
        route: 'Девятовка - Победы'
    },{
        number:3,
        route: 'Фолюш - Ожешко'
    },{
        number:4,
        route: 'Барановичи - Пышки'
    },{
        number:5,
        route: 'Вишневец - Азот'
    },{
        number:6,
        route: 'Вишневец - Азот'
    },{
        number:7,
        route: 'Вишневец - Азот'
    },{
        number:8,
        route: 'Вишневец - Азот'
    },{
        number:9,
        route: 'Вишневец - Азот'
    },{
        number:10,
        route: 'Вишневец - Азот'
    },{
        number:11,
        route: 'Вишневец - Азот'
    }];

    const rerenderBuses = useCallback(() => bus.map(el => <div><h1>{el.number}</h1><h2>{el.route}</h2></div>),[bus]);

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
            <h1>Your city is <span>Hrodna</span></h1>
            {rerenderBuses()}
        </div>
);
};

export default ScheduleBus;
