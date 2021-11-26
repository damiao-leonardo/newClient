import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Client from '../pages/Client';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/"  exact component={Dashboard} />
        <Route path="/newClient"  component={Client}/>
    </Switch>
);

export default Routes;





