import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' render={() => <HomePage />}/>
        </Switch>
    );
};

export {useRoutes};