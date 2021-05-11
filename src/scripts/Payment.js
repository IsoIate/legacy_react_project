import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import '../css/Payment.css'
import QRModal from "./QRModal";
import CardPayment from "./CardPayment";
import CashPayment from "./CashPayment";

function Payment (props) {

    let history = useHistory();

    const [cashShow, setCashShow] = useState(false);
    const cashPayClose = () => setCashShow(false);
    const cashPayOpen = () => setCashShow(true);

    const [cardShow, setCardShow] = useState(false);
    const cardPayClose = () => setCardShow(false);
    const cardPayOpen = () => setCardShow(true);

    return (
        <div className="payment">
            <div className="payState">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span> 주문 수량 : </span>
                    <span> 총 가격 : </span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span> { props.orderCount } </span>
                    <span> { props.orderPrice } </span>
                </div>

            </div>
            <div className="payBtn">
                <Button variant="secondary" className = "payBtnText" onClick = { () => {
                    history.push("/MainPage/0");
                }}>뒤로<br/>가기</Button>
                <Button variant="warning" className = "payBtnText" onClick = {() => {
                    cashPayOpen();
                }}>현금<br/>결제</Button>
                <Button variant="warning" className = "payBtnText" onClick = {() => {
                    cardPayOpen();
                }}>카드<br/>결제</Button>
            </div>

            {
                cashShow === true ?
                    <CashPayment show = { cashShow } onHide = { cashPayClose }/>
                    : cardShow === true ?
                    <CardPayment show = { cardShow } onHide = { cardPayClose }/>
                    : null
            }
        </div>
    )
}

export default Payment;