import React from 'react';
import {Link, Route} from "react-router-dom";
import {Button} from "react-bootstrap";
import MainPage from "./MainPage";

function FrontPage() {
    return (
        <>
            <div>
                <h1> FrontPage </h1>
                <Route exact path = { "/MainPage:/id" }>
                    <MainPage />
                </Route>

                <Link as={ Link } to={ "/MainPage/:id" }>
                    <Button className = "orderBtn" size="lg"> 메인으로 </Button>
                </Link>
            </div>
        </>
    )
}

export default FrontPage