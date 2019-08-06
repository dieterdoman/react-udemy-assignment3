import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/courses" component={Courses}/>
                    <Redirect from='/all-courses' to='/courses' />
                    <Route render={() => <p>Page not found</p>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
