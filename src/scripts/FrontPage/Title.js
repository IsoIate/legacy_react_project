import {Link} from "react-router-dom";
import {Jumbotron} from "react-bootstrap";
import React, {useState} from "react";
import Admin from "../../img/Admin.png"

import '../../css/FrontPage/FrontPage.css'
import AdminModal from "./AdminModal";

function Title(props) {

    const [Show, setShow] = useState(false);
    const Close = () => setShow(false);
    const Open = () => setShow(true);

    return (
        <>
            <Jumbotron className = "jumbo jumbotron">
                {/*<Link as = { Link } to = { "/AdminPage" } className = "link" >*/}
                    <div className = "adminDiv" onClick = {() => {
                        Open();
                        /*console.log(Show);*/
                    }}>
                        <img src = { Admin } className = "admin"/>
                    </div>
                {/*</Link>*/}
                <h1> ABC Cafe </h1>
            </Jumbotron>

            {
                Show === true ?
                    < AdminModal show = { Show } onHide = { Close } />
                    : null
            }
        </>
    )
}

export default Title
