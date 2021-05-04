import React from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import '../css/Payment.css'

function Payment (props) {

    let history = useHistory();

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
                    history.push("/");
                }}>뒤로<br/>가기</Button>
                <Button variant="warning" className = "payBtnText">현금<br/>결제</Button>
                <Button variant="warning" className = "payBtnText">카드<br/>결제</Button>
            </div>
        </div>
    )
}

export default Payment;