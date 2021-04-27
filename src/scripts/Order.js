import React, {useEffect, useState} from 'react';

import { Link, useHistory, useParams } from 'react-router-dom'
import {Button, Modal, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Data from './data.js'
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import MenuSelectModal from "./MenuSelectModal";

import '../css/Order.css';

import coffee from '../img/americano.png';
import coffee0 from '../img/americano.png';
import coffee1 from '../img/cafelatte.png';
import coffee2 from '../img/vanillalatte.png';
import coffee3 from '../img/cafemoca.png';
import coffee4 from '../img/hazelnut.png';
import coffee5 from '../img/caramelmacchiato.png';

import background from '../img/Background.png'


function Order(props) {
    let history = useHistory();
    let { id } = useParams();
    let [coffee, coffeeChange] = useState(Data);

    let menu = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트']
    let [menuState, menuStateChange] = useState(false);
    let [modal, setModal] = useState(false);



    return (
        <div className = "order">
            <div className="body">
                <div className="menuContainer">
                    <div className="homeBtn">
                        <p className="cursorAble" onClick={() => {
                            history.push("/")
                        }}><i className="fas fa-home fa-2x"></i>  처음으로</p>
                    </div>
                    <div className = "menuTitle" >      {/* 메뉴 선택 버튼 */}

                        <Nav justify variant="pills"  defaultActiveKey="/home">
                            <Nav.Link className="cursorDisable" style={{paddingBottom: "0px"}}>
                                <LeftArrow menuState = { menuState } history = { history } />   {/* 메뉴 왼쪽 이동 버튼 */}
                            </Nav.Link>
                        </Nav>

                        <Menu menu = { menu } history = { history }/>     {/* 메뉴 버튼 */}

                        <Nav justify variant="pills"  defaultActiveKey="/home">
                            <Nav.Link style={{paddingBottom: "0px"}}>
                                <RightArrow menuState = { menuState } history = { history }/>
                            </Nav.Link>
                        </Nav>

                    </div>
                </div>

                {/* 음료 선택 버튼 */}
                <div className="container-fluid ">
                    <div className="row test1">
                        <Coffee coffee = { coffee } id = { id } setModal = { setModal }/>
                    </div>
                </div>

                {/* 음료 이동 버튼 */}
                <div className = "moveButtons">
                    <Button className={" leftBtn "} onClick={() => {
                        /*history.push("/");*/
                    }}>
                        <div className="leftArrow"></div>
                        이전
                    </Button>
                    <Button className={"rightBtn"} onClick = { () => {

                    }}>
                        다음
                        <div className="rightArrow"></div>
                    </Button>
                </div>


            </div>

            {/* footer */}
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
                        <Button onClick = { () => {
                            history.push("/");
                        }}>뒤로가기</Button>
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
                    <Nav.Link style={{paddingBottom: "0px"}} onClick={ () => {
                        props.history.push("./" + index)
                    }}>
                        <p className = "menu" > { props.menu[index] } </p>
                    </Nav.Link>
                </Nav>
            )
        })
    )
}

function Coffee(props) {

    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        props.coffee.map(function (num, index) {
            return (
                <>
                    <div className="col-sm-3 menuBox " onClick={ handleShow }>

                        <div >
                            <img className = "coffeeImg" src = { coffee1 } />
                        </div>
                        <div>
                            <p> { props.coffee[props.id].title } </p>
                            <p> { props.coffee[props.id].price + " 원"} </p>
                        </div>

                    </div>
                    <MenuSelectModal show = { show } setShow = { setShow } handleClose = { handleClose }
                                     handleShow = { handleShow } coffee = { props.coffee } count = { count } setCount = { setCount }
                                     id = { props.id } coffeeImg = { coffee1 }/>
                </>
            )
        })
    )
}

/*function Modal(props) {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}*/

export default Order