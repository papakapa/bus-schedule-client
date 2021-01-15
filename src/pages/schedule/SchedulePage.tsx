import React from 'react';
import Header from "../../templates/Header";
import {useScheduleRoutes} from "../../root/routes";

const SchedulePage : React.FC = () => {

    const routes = useScheduleRoutes();

    return (
        <div className='schedule'>
            <Header />
            {routes}
        </div>
    );
};

export default SchedulePage;