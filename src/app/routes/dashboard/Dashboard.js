import React from 'react';
import classes from './Dashboard.module.scss';
import Home from '../../pages/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Metrics from '../../pages/Metrics/Metrics';
import Dispatcher from '../../pages/Dispatcher/Dispatcher';
import Network from '../../pages/Network/Network';
import Actions from '../../pages/Actions/Actions';

const Dashboard = (props) => {
    return (
        <div className={classes.dashboard}>
            <main className={classes.main}>
                <div className={classes.statusText}>
                    {props.isConnected ? 'online' : 'offline'}
                </div>
                <Switch>
                    <Route path="/dashboard/metrics" component={Metrics} />
                    <Route
                        exact
                        path="/dashboard/dispatcher"
                        component={Dispatcher}
                    />
                    <Route
                        exact
                        path="/dashboard/network"
                        component={Network}
                    />
                    <Route
                        exact
                        path="/dashboard/actions"
                        component={Actions}
                    />
                    <Route>
                        <Home />
                    </Route>
                </Switch>
            </main>
        </div>
    );
};

export default Dashboard;
