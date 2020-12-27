import React from 'react';
import
{BrowserRouter as Router, Switch, Route, Link}
from "react-router-dom"

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";

import './Sidebar.css'

function Sidebar() {
    return (
            <Router>
                <div>
                    <ul className={"sidebar"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>

                    <div>
                        <Switch>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
    );



}export default Sidebar