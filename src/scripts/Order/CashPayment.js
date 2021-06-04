import React from "react";
import { useHistory } from 'react-router-dom'
import {Button, Modal} from "react-bootstrap";
import cash from "../../img/cash.png";

import '../../css/Order/CashPayment.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CashPayment(props) {

    let history = useHistory();

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 현금 결제 </h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className = "qrBody">
                        <h2 style = {{ textAlign : "center" }} > 현금을 가지런히 펴서 <br/> 투입구에 넣어주세요 </h2>
                        <img className = "cardPayment" src = { cash }/>
                        <i className="fas fa-caret-up fa-5x cardInsert"></i>
                        <h2> ABC 카페 </h2>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default CashPayment;