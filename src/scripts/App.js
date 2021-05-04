/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, Card, Modal } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import Data from '../data/coffeeData.js'
import Title from './Title';
import Order from './Order.js';
import SimpleOrder from './SimpleOrder';
import MainPage from "./MainPage";
import '../css/App.css';
import FrontPage from "./FrontPage";
/*import imgA from './img/Admin.png';*/

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="App">

            <Switch>
                <Route exact path = { "/order/:id" }>
                    <Order />
                </Route>
                <Route exact path = { "/SimpleOrder/:id" }>
                    <SimpleOrder />
                </Route>
                <Route exact path = { "/MainPage/:id" }>
                    <Title/>
                    <MainPage show = { show } handleShow = { handleShow } handleClose = { handleClose }/>
                </Route>
                <Route exact path = {"/"}>
                    <FrontPage />
                </Route>
                <Route exact path = { "/MainPage/:id" }>
                    <Title/>
                    <MainPage show = { show } handleShow = { handleShow } handleClose = { handleClose }/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;
