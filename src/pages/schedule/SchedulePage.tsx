import React from 'react';
import Header from "../../templates/Header";
import ScheduleNav from "./components/ScheduleNav";

const SchedulePage : React.FC = () => {
    return (
        <div className='schedule'>
            <Header />
            <ScheduleNav />
        </div>
    );
};

export default SchedulePage;