import React from "react";
import { useHistory } from 'react-router-dom'
import {Button, Modal} from "react-bootstrap";
import payment from "../img/payment.png";

import '../css/CardPayment.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CardPayment(props) {

    let history = useHistory();

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 카드 결제 </h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className = "qrBody">
                        <h3 style = {{ textAlign : "center" }} > IC칩이 위를 향하도록 <br/> 카드를 꽂아주세요 </h3>
                        <img className = "cardPayment" src = { payment }/>
                        <i className="fas fa-caret-up fa-5x cardInsert"></i>
                        <h3> ABC 카페 </h3>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default CardPayment;