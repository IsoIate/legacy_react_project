/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import Order from './Order.js';
import EazyOrder from './EazyOrder.js';
import '../css/App.css';
/*import imgA from './img/Admin.png';*/

function App() {
  return (
    <div className="App">
      <Jumbotron className = "jumbo">
          {/*<img src= { imgA } className="img"/>*/}
          <Link as = {Link} to = { "/admin" } className = "link" >
              {/*<div className = "adminButton"> </div>*/}
          </Link>
          <h1> ABC Cafe </h1>
      </Jumbotron>
      <Switch>
          <Route exact path = { "/order" }>
              <Order/>
          </Route>
          <Route exact path = { "/eazyOrder" }>
              <EazyOrder/>
          </Route>
          <Route exact path = {"/"}>
              <MainPage/>
          </Route>
      </Switch>

    </div>
  );
}

function MainPage() {
    return (
        <>

            <Card className="text-center" style={{height: "150vw", width: "100vw"}}>
                <Card.Body className= " mainImg ">

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="row" style={{ marginBottom: "20px" }}>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/order" }>
                                <Button className = "orderBtn" size="lg"> 주문하기 </Button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/eazyorder" }>
                                <Button className = "eazyOrderBtn" size="lg"> 더 쉽게 주문하기 </Button>
                            </Link>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
}

export default App;
