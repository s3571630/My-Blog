import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from './pages/App';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
