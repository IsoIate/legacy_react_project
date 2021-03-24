/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import '../css/App.css';
import admin from '../img/Admin.png';

function App() {
  return (
    <div className="App">

      <Switch>
          <Route exact path = { "/mainpage" }>
              <MainPage/>
          </Route>
          <Route exact path = {"/"}>
              <Main/>
          </Route>
      </Switch>

    </div>
  );
}

function Main() {
    return (
        <>

            <Card className="text-center" style={{height: "150vw", width: "100vw"}}>
                <Card.Body className= " mainImg ">
                    <div className="topBtn">
                        <img className = "adminImg"  src={admin}/>
                    </div>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className="row" style={{ marginBottom: "20px" }}>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/mainpage" }>
                                <Button className = "orderBtn" size="lg"> 포장주문 </Button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link as={ Link } to={ "/mainpage" }>
                                <Button className = "eazyOrderBtn" size="lg"> 매장식사 </Button>
                            </Link>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
}

export default App;
