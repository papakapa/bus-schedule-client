import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SchedulePage from "../pages/schedule/SchedulePage";

const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact render={() => <HomePage />}/>
            <Route path='/schedule' render={() => <SchedulePage />}/>
        </Switch>
    );
};

export {useRoutes};