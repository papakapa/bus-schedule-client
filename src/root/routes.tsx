import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SchedulePage from "../pages/schedule/SchedulePage";
import ScheduleBus from "../pages/schedule/components/ScheduleBus";
import ScheduleStop from "../pages/schedule/components/ScheduleStop";
import ScheduleNav from "../pages/schedule/components/ScheduleNav";

const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact render={() => <HomePage/>}/>
            <Route path='/schedule' render={() => <SchedulePage/>}/>
        </Switch>
    );
};

const useScheduleRoutes = () => {
    return (
        <Switch>
            <Route path='/schedule/main' render={() => <ScheduleNav />}/>
            <Route path='/schedule/bus-number' render={() => <ScheduleBus />}/>
            <Route path='/schedule/bus-stop' render={() => <ScheduleStop />}/>
        </Switch>
    )
};

export {useRoutes, useScheduleRoutes};