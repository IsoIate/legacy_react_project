/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import '../../css/FrontPage/MainPage.css'
/*import imgA from './img/Admin.png';*/
import mainImg from '../../img/MainImg.png'

function MainPage() {
    return (
        <>
            <Card className="text-center" style={{height: "150vw", width: "100vw"}}>
                <Card.Body >
                    <img className= " mainImg " src = { mainImg } />
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="row" style={{ marginBottom: "20px" }}>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/order/0" }>
                                <Button className = "orderBtn" size="lg"> 주문하기 </Button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/SimpleOrder/0" }>
                                <Button className = "simpleOrderBtn" size="lg"> 더 쉽게 주문하기 </Button>
                            </Link>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    );
}

export default MainPage
