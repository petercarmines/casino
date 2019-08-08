import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './pages/Home'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        );
    }
}

export default Routes;
