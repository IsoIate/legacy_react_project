import React, {useEffect, useState} from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import '../../css/Payment.css'
import QRModal from "../FrontPage/QRModal";
import CardPayment from "./CardPayment";
import CashPayment from "./CashPayment";
import NoPayment from "./NoPayment";
import { connect } from "react-redux";

function Payment (props) {

    let history = useHistory();

    const [cashShow, setCashShow] = useState(false);
    const cashPayClose = () => setCashShow(false);
    const cashPayOpen = () => setCashShow(true);

    const [cardShow, setCardShow] = useState(false);
    const cardPayClose = () => setCardShow(false);
    const cardPayOpen = () => setCardShow(true);

    const [noShow, setNoShow] = useState(false);
    const noPayClose = () => setNoShow(false);
    const noPayOpen = () => setNoShow(true);

    return (
        <div className="payment">
            <div className="payState">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span> 주문 수량 : </span>
                    <span> 총 가격 : </span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span> { props.orderState[0] } </span>
                    <span> { props.orderState[1] } </span>
                </div>

            </div>
            <div className="payBtn">

                <button variant="secondary" className = "backBtnText" onClick = { () => {
                    history.push("/MainPage/0");
                }}>뒤로<br/>가기</button>

                <button variant="warning" className = "payBtnText" onClick = {() => {
                    props.orderState[0] == 0 ? noPayOpen() : cashPayOpen()
                }}>현금<br/>결제</button>

                <button className = "payBtnText" onClick = {() => {
                    props.orderState[0] == 0 ? noPayOpen() : cardPayOpen()
                }}>카드<br/>결제</button>

            </div>

            {
                cashShow === true ?
                    <CashPayment show = { cashShow } onHide = { cashPayClose }/>
                    : cardShow === true ?
                    <CardPayment show = { cardShow } onHide = { cardPayClose }/>
                    : noShow === true ?
                    <NoPayment show = { noShow } onHide = { noPayClose }/>
                    : null
            }
        </div>
    )
}

/* state를 props로 변환 */
function Conversion(state) {
    return {
        state : state.reducer,
        orderState : state.orderReducer
    }
}

export default connect(Conversion)(Payment);