import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom'
import {Button, Nav} from 'react-bootstrap'
import '../css/Order.css';
import coffee from '../img/coffee.png';
import iceCoffee from '../img/iceCoffee.png';
import background from '../img/Background.png'
import Data from './Data'

function Order(props) {
    let history = useHistory();
    let menu = ['커피', '에이드', '주스', '차', '기타']
    let [coffee, coffeeChange] = useState(Data)

    return (
        <div className = "order">
            <div className="body">
                <div className = "menuTitle" >      {/* 메뉴 선택 버튼 */}
                    <Menu menu = { menu }/>
                </div>

                <div className="container-fluid ">  {/* 음료 선택 버튼 */}
                    <div className="row">
                        <Coffee coffee = { coffee }/>
                    </div>
                </div>

                <div className = "moveButtons">
                    <Button onClick = {() => {}}> 이전 </Button>
                    <Button> 다음 </Button>
                </div>

            </div>
            <div className="footer">
                <div>
                    <p> 메뉴를 선택해주세요 </p>
                </div>
                <div>
                    <img src = { background } style={{ objectFit: "contain", width: "fit-content", height: "600px"}}/>
                </div>
                <div className="payment">
                    <div className="payState">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span> 주문 수량 : </span>
                            <span> 총 가격 : </span>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span> 0 </span>
                            <span> 0 </span>
                        </div>

                    </div>
                    <div className="payBtn">
                        <Button>뒤로가기</Button>
                        <Button>현금결제</Button>
                        <Button>카드결제</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Menu(props) {
    return (
        props.menu.map(function (num, index) {
            return (
                <Nav justify variant="pills" className="menuSelect" defaultActiveKey="/home">
                    <Nav.Item >
                        <Nav.Link >
                            <p className = "menu"> { props.menu[index] } </p>
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            )
        })
    )
}

function Coffee(props) {
    return (
        props.coffee.map(function (num, index) {
            return (
                <div className="col-sm-3 menuBox">
                    <div>
                        <img className = "coffeeImg" src = { index % 2 == 0 ? iceCoffee : coffee } />
                    </div>
                    <div>
                        <p> { props.coffee[index].title } </p>
                        <p> { props.coffee[index].price + " 원"} </p>
                    </div>

                </div>
            )
        })
    )
}

export default Order