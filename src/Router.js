import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from './pages/App';
import NotFound from './pages/NotFound';
const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
