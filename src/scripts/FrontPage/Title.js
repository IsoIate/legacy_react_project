import {Link} from "react-router-dom";
import {Jumbotron} from "react-bootstrap";
import React from "react";

import '../../css/FrontPage.css'

function Title() {
    return (
        <Jumbotron className = "jumbo jumbotron">
            {/*<img src= { imgA } className="img"/>*/}
            <Link as = {Link} to = { "/admin" } className = "link" >
                {/*<div className = "adminButton"> </div>*/}
            </Link>
            <h1> ABC Cafe </h1>
        </Jumbotron>
    )
}

export default Title
