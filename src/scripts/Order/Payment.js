import React, {useEffect, useState} from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import '../../css/Order/Payment.css'
import QRModal from "../FrontPage/QRModal";
import CardPayment from "./CardPayment";
import CashPayment from "./CashPayment";
import NoPayment from "./NoPayment";
import { connect } from "react-redux";
import io from 'socket.io-client';

const socketClient = io("http://localhost:8080");

socketClient.on("connect", () => {
    console.log("connection server")
});

socketClient.emit("first Request", { data : "first Request" });

socketClient.on("first Respond", req => {
    console.log(req);
})

function Payment (props) {
    var testArr = [1,2,3,4];

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

    let [ payment, setPayment ] = useState(0);

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
                {/* 결제 정보를 서버로 보내는 코드 */}
                <form action = "/payInfo" method = "post" style={{display : "flex", flexGrow : "1"}}>
                    {
                        props.state[0] != null ?
                            props.state.map((num, index) => {
                                return (
                                    <div style={{display : "none"}}>
                                        <input type = "text" value = { props.state[index].title }
                                               name = "title" /> +
                                        <input type = "text" value = { props.state[index].count }
                                               name = "count" /> +
                                        <input type = "text" value = { props.state[index].price }
                                               name = "price" />
                                        <input type = "text" value = { props.state[index].temp }
                                               name = "temp" />
                                        <input type = "text" value = { props.state[index].menuIndex }
                                               name = "menuIndex" />
                                        <input type = "text" value = { payment }
                                               name = "payment" />
                                    </div>
                                )
                            })
                            : null
                    }

                    <button variant="secondary" className = "backBtnText" onClick = { () => {
                        history.push("/MainPage/0");
                    }}>뒤로<br/>가기</button>

                    <button type = "submit" variant="warning" className = "payBtnText" onClick = {() => {

                        return (
                            props.orderState[0] == 0 ? noPayOpen() : cashPayOpen(), setPayment(0)
                        )
                    }}>현금<br/>결제</button>

                    <button type = "submit" className = "payBtnText" onClick = {() => {
                        return (
                            props.orderState[0] == 0 ? noPayOpen() : cardPayOpen(), setPayment(1)
                        )
                    }}>카드<br/>결제</button>
                </form>
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