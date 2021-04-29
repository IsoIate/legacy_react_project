/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, Card, Modal } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import Data from '../data/coffeeData.js'
import Title from './Title';
import Order from './Order.js';
import EazyOrder from './EazyOrder.js';
import '../css/App.css';
/*import imgA from './img/Admin.png';*/

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="App">

            <Switch>
                <Route exact path = { "/order/:id" }>
                    <Order Data = { Data } />
                </Route>
                <Route exact path = { "/eazyOrder:/id" }>
                    <EazyOrder/>
                </Route>
                <Route exact path = {"/"}>
                    <Title/>
                    <MainPage show = { show } handleShow = { handleShow } handleClose = { handleClose }/>
                </Route>
            </Switch>

        </div>
    );
}

function MainPage(props) {
    return (
        <>

            <Card className="text-center" style={{height: "150vw", width: "100vw"}}>
                <Card.Body className= " mainImg ">
                    {/* <Button variant="primary" onClick={props.handleShow}>
                        Launch demo modal
                    </Button>

                    <Modal show={ props. show } onHide={props.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={props.handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>*/}
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="row" style={{ marginBottom: "20px" }}>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/order/0" }>
                                <Button className = "orderBtn" size="lg"> 주문하기 </Button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/eazyorder/0" }>
                                <Button className = "eazyOrderBtn" size="lg"> 더 쉽게 주문하기 </Button>
                            </Link>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
}

/*function Modal(props) {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}*/

export default App;
