import React, {useEffect, useState} from 'react';

import { Link, useHistory, useParams } from 'react-router-dom'
import {Button, Modal, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import coffeeData from '../data/coffeeData.js'
import bubbleTeaData from "../data/bubbleTeaData";
import adeData from "../data/adeData";
import frappeData from "../data/frappeData";
import juiceData from "../data/juiceData";
import dessertData from "../data/dessertData";
import smoothieData from "../data/smoothieData";
import teaData from "../data/teaData";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import MenuSelectModal from "./MenuSelectModal";

import '../css/Order.css';

import coffee0 from '../img/coffee/americano.png';
import coffee1 from '../img/coffee/cafelatte.png';
import coffee2 from '../img/coffee/vanillalatte.png';
import coffee3 from '../img/coffee/cafemoca.png';
import coffee4 from '../img/coffee/hazelnut.png';
import coffee5 from '../img/coffee/caramelmacchiato.png';
import coffee6 from '../img/coffee/tiramisulatte.png'

import bubbleTea0 from "../img/bubbleTea/milkTeaBubbleLatte.png";
import bubbleTea1 from "../img/bubbleTea/blackSugarBubbleLatte.png";
import bubbleTea2 from "../img/bubbleTea/dalgonaBubbleLatte.png";
import bubbleTea3 from "../img/bubbleTea/blackSugarSweetPotatoLatte.png";

import frappe0 from "../img/frappe/javaChipFrappe.png"
import frappe1 from "../img/frappe/cncFrappe.png"
import frappe2 from "../img/frappe/mintChocoFrappe.png"
import frappe3 from "../img/frappe/strawberryCreamFrappe.png"
import frappe4 from "../img/frappe/greenTeaFrappe.png"

import smoothie0 from "../img/smoothie/plainYogurt.png"
import smoothie1 from "../img/smoothie/strayberryYogurt.png"
import smoothie2 from "../img/smoothie/blueberryYogurt.png"
import smoothie3 from "../img/smoothie/mangoYogurt.png"
import smoothie4 from "../img/smoothie/strawberryBananaYogurt.png"
import smoothie5 from "../img/smoothie/mangoBananaYogurt.png"
import smoothie6 from "../img/smoothie/appleMangoCrush.png"

import ade0 from "../img/ade/grapefruitLimeAde.png"
import ade1 from "../img/ade/greenGrapeAde.png"
import ade2 from "../img/ade/lemonAde.png"
import ade3 from "../img/ade/blueLemonAde.png"
import ade4 from "../img/ade/citronAde.png"
import ade5 from "../img/ade/calamansiAde.png"

import juice0 from "../img/juice/bananaJuice.png"
import juice1 from "../img/juice/tomatoJuice.png"
import juice2 from "../img/juice/kiwiJuice.png"

import tea0 from "../img/tea/blueTangerineTea.png"
import tea1 from "../img/tea/gingerTea.png"
import tea2 from "../img/tea/lemonTea.png"
import tea3 from "../img/tea/grapefruiteTea.png"
import tea4 from "../img/tea/citronTea.png"
import tea5 from "../img/tea/peppermintTea.png"
import tea6 from "../img/tea/chamomileTea.png"
import tea7 from "../img/tea/earlgreyTea.png"

import dessert0 from "../img/dessert/cheeseCake.png";
import dessert1 from "../img/dessert/tiramisuCake.png";
import dessert2 from "../img/dessert/chocomousseCake.png";
import dessert3 from "../img/dessert/plainCroffle.png";
import dessert4 from "../img/dessert/icecreamCroffle.png";
import dessert5 from "../img/dessert/coffeeBeanBread.png";
import dessert6 from "../img/dessert/custardCreamBread.png";

import background from '../img/Background.png'


function Order() {
    let [coffee] = useState(coffeeData);
    let [bubbleTea] = useState(bubbleTeaData);
    let [frappe] = useState(frappeData);
    let [smoothie] = useState(smoothieData);
    let [ade] = useState(adeData);
    let [juice] = useState(juiceData);
    let [tea] = useState(teaData);
    let [dessert] = useState(dessertData);

    let menu = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트'];
    let coffeeImg = [coffee0, coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];
    let bubbleTeaImg = [bubbleTea0, bubbleTea1, bubbleTea2, bubbleTea3];
    let frappeImg = [frappe0, frappe1, frappe2, frappe3, frappe4];
    let smoothieImg = [smoothie0, smoothie1, smoothie2, smoothie3, smoothie4, smoothie5, smoothie6];
    let adeImg = [ade0, ade1, ade2, ade3, ade4, ade5];
    let juiceImg = [juice0, juice1, juice2];
    let teaImg = [tea0, tea1, tea2, tea3, tea4, tea5, tea6/*, 나중에 수정 tea7*/];
    let dessertImg = [dessert0, dessert1, dessert2, dessert3, dessert4, dessert5, dessert6];

    let menuItem = [ coffee, bubbleTea, frappe, smoothie, ade, juice, tea, dessert ];
    let menuImg = [coffeeImg, bubbleTeaImg, frappeImg, smoothieImg, adeImg, juiceImg, teaImg, dessertImg ];

    let history = useHistory();
    let { id } = useParams();       /* 페이지 뒤에 붙는 숫자 */

    let [menuState] = useState(false);
    let [orderCount, orderCountChange] = useState(0);
    let [orderPrice, orderPriceChange] = useState(0);
    let tableIndex = [1,2,3,4,5];

    return (
        <div className = "order">
            <div className="body">
                <div className="menuContainer">
                    <div className = "storeBanner">
                        <div className="homeBtn">
                            <p className="cursorAble" onClick={() => {
                                history.push("/")
                            }}><i className="fas fa-home fa-2x"></i>  처음으로</p>
                        </div>

                        <h1> ABC Cafe </h1>
                    </div>
                    <div className = "menuTitle" >      {/* 메뉴 선택 버튼 */}

                        <Nav justify variant="pills"  defaultActiveKey="/home">
                            <Nav.Link className="cursorDisable" style={{paddingBottom: "0px"}}>
                                <LeftArrow menuState = { menuState } history = { history } />   {/* 메뉴 왼쪽 이동 버튼 */}
                            </Nav.Link>
                        </Nav>

                        <Menu menu = { menu } history = { history } />     {/* 메뉴 버튼 */}

                        <Nav justify variant="pills"  defaultActiveKey="/home">
                            <Nav.Link style={{paddingBottom: "0px"}}>
                                <RightArrow menuState = { menuState } history = { history }/>
                            </Nav.Link>
                        </Nav>

                    </div>
                </div>

                {/* 음료 선택 버튼 */}
                <div className="container-fluid ">
                    <div className="row menuSelectDiv">
                        <MenuDisplay menu = { menu } id = { id } history = { history }
                                     coffee = { coffee } bubbleTea = { bubbleTea } frappe = { frappe } smoothie = { smoothie }
                                     ade = { ade } juice = { juice } tea = { tea } dessert = { dessert } coffeeImg = { coffeeImg }
                                     bubbleTeaImg = { bubbleTeaImg } frappeImg = { frappeImg } smoothieImg = { smoothieImg }
                                     adeImg = { adeImg } juiceImg = { juiceImg } teaImg = { teaImg } dessertImg = { dessertImg }
                                     menuItem = { menuItem } menuImg = { menuImg } orderCountChange = { orderCountChange } orderPriceChange = { orderPriceChange }

                        />

                    </div>
                </div>

                {/* 음료 이동 버튼 */}
                <div className = "moveButtons">
                    <Button className={ "leftBtn btn btn-primary"} onClick={() => {
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
                    {/*<img src = { background } style={{ objectFit: "contain", width: "fit-content", height: "600px"}}/>*/}
                    <table className="table table-striped table-bordered orderTable ">
                        <tr className = "tableHeader" >
                            <th> # </th>
                            <th colSpan={5}> 메뉴명 </th>
                            <th> 수량 </th>
                            <th> 가격 </th>
                            <th> 취소 </th>
                        </tr>
                        { tableIndex.map(function (num, index) {
                            return (
                                <tr>
                                    <td> { index + 1 } </td>
                                    <td colSpan={5}> # </td>
                                    <td> # </td>
                                    <td> # </td>
                                    <td> X </td>
                                </tr>
                            )
                        })}

                    </table>
                </div>
                <div className="payment">
                    <div className="payState">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span> 주문 수량 : </span>
                            <span> 총 가격 : </span>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span> { orderCount } </span>
                            <span> { orderPrice } </span>
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

function MenuDisplay(props) {

    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuIndex = props.menuItem[props.id].length - 1
    let [clickNum, clickNumChange] = useState(0);
    let [totalCount, totalCountChange] = useState(0);
    let [totalPrice, totalPriceChange] = useState(0);

    return (
        props.menuItem[props.id].map(function (num, index) {
            return (
                <>
                    <div className="col-lg-3 menuBox " onClick={ () => {
                        handleShow();
                        clickNumChange(index);
                    } }>
                        { index < 3 ?
                            <div>
                                <div>
                                    <img className = "menuImg" src = { props.menuImg[props.id][index] } />
                                </div>
                                <div className = "menuContext">
                                    <p> { props.menuItem[props.id][index].title } </p>
                                    <p> { props.menuItem[props.id][index].price + " 원"} </p>
                                </div>
                            </div>
                            : <div>
                                <div>
                                    <img className = "menuImg" src = { props.menuImg[props.id][index] } />
                                </div>
                                <div className = "menuContext">
                                    <p> { props.menuItem[props.id][index].title } </p>
                                    <p> { props.menuItem[props.id][index].price + " 원"} </p>
                                </div>
                            </div>
                        }

                    </div>

                    {/*{ console.log( "clickNum : " + clickNum) }*/}
                    { index === menuIndex ? <MenuSelectModal show = { show } setShow = { setShow } clickNum = { clickNum } handleClose = { handleClose }
                                                             handleShow = { handleShow } count = { count } setCount = { setCount }
                                                             id = { props.id } menuImg = { props.menuImg } menuItem = { props.menuItem }
                                                             totalCountChange = { totalCountChange } totalPriceChange = { totalPriceChange }

                    /> : null}
                    { props.orderCountChange(totalCount) }
                    { props.orderPriceChange(totalPrice) }
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