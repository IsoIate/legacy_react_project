/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, Card, Modal } from "react-bootstrap";
import {Link, Route, Switch, useParams} from "react-router-dom";

import Data from '../data/coffeeData.js'
import AdminPage from "./AdminPages/AdminPage";
import Title from './FrontPage/Title';
import Order from './Order/Order.js';
import SimpleOrder from './Order/SimpleOrder';
import MainPage from "./FrontPage/MainPage";
import '../css/App.css';
import FrontPage from "./FrontPage/FrontPage";
import Revenue from "./AdminPages/Revenue";
import Setting from "./AdminPages/Setting";
/*import imgA from './img/Admin.png';*/

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { id } = useParams();

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
                <Route exact path = { "/AdminPage" }>
                    <AdminPage />
                </Route>
                <Route exact path = { "/AdminPage/Revenue" }>
                    <Revenue />
                </Route>
                <Route exact path = { "/AdminPage/Setting" }>
                    <Setting />
                </Route>
                <Route exact path = {"/"}>
                    <FrontPage />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
