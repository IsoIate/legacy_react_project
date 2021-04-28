import React, { useState, useEffect } from 'react';
import {Button, Modal, Jumbotron} from 'react-bootstrap'

import '../css/MenuSelectModal.css'

import iceDrink from '../img/iceDrink.png'
import Drink from '../img/drink.png'
import hotDrink from '../img/hotDrink.png'
import syrup from '../img/syrup.png'
import noSyrup from '../img/noSyrup.png'
import inStore from '../img/inStore.png'
import takeAway from '../img/takeAway.png'

function MenuSelectModal(props) {

    let [iceSelect, iceChange] = useState(false);
    let [syrupSelect, syrupChange] = useState(1);

    useState(() => {
        return function () {
            iceChange(false);
        }
    })

    return (
        <div className="MenuSelectModal">
            <Modal className = "menuModal" size = "lg" show ={ props.show } onHide ={ props.handleClose }>
                <Jumbotron className = "Jumbo">
                    <h1> 주문메뉴 선택 </h1>
                </Jumbotron>
                <Modal.Header className = "header" >
                    <div className="menuImageDiv">
                        <img className="menuImage" src={ props.coffeeImg }/>
                    </div>
                    <div className="menuInfoDiv">
                        <div className="menuTitleDiv">
                            <h2> { props.coffee[props.id].title } </h2>
                        </div>
                        <div className="menuCountDiv">
                            <div className="countUpBtn" onClick={ () => {
                                props.setCount(props.count - 1);
                            }}>
                               <div className="minus"></div>
                            </div>
                            <div className="menuCountNum">
                                <p> { props.count } </p>
                            </div>
                            <div className="countDownBtn"  onClick={ () => {
                                props.setCount(props.count + 1);
                            }}>
                                <div className="plus"></div>
                            </div>
                            <div className = "menuPriceDiv">
                                <h3> { props.coffee[props.id].price } 원 </h3>
                            </div>
                        </div>
                        <div className="totalPriceDiv">
                            <h3> 총 : </h3>
                            <h2> { (props.coffee[props.id].price) * props.count } </h2>
                            <h3> 원 </h3>
                        </div>


                    </div>
                </Modal.Header>
                <Modal.Body style={ { padding : "0" } }>
                    <div className="titleDiv">
                        <h4> 옵션을 선택해 주세요 </h4>
                    </div>
                    <div className = "optionDiv">
                        <div className = "iceOption">
                            <div className = "optionName">
                                <p> 얼음 </p>
                            </div>
                            <div className="optionSelect">
                                <div className = { "optionSelectBtn" } onClick={() => {
                                    iceChange(true);
                                    console.log(iceSelect);
                                }}>
                                    <img className = "selectBtnImg" src = { iceDrink }/>
                                    <p> 얼음 많이 </p>
                                </div>
                                <div className = { "optionSelectBtn" } onClick={() => {
                                    iceChange(true);
                                    console.log(iceSelect);
                                }}>
                                    <img className = "selectBtnImg" src = { Drink }/>
                                    <p> 얼음 적게 </p>
                                </div>
                                <div className = { "optionSelectBtn" } onClick={() => {
                                    iceChange(true);
                                    console.log(iceSelect);
                                }}>
                                    <img className = "selectBtnImg" src = { hotDrink }/>
                                    <p> 따뜻하게 </p>
                                </div>
                            </div>
                        </div>
                        <div className = "syrupOption">
                            <div className = "optionName">
                                <p> 시럽 </p>
                            </div>
                            <div className="optionSelect">

                                <div className = "optionSelectBtn">
                                    <img className = "selectBtnImg" src = { noSyrup }/>
                                    <p> 시럽 없음 </p>
                                </div>
                                <div className = "optionSelectBtn">
                                    <img className = "selectBtnImg" src = { syrup }/>
                                    <p> 시럽 추가 </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="titleDiv">
                        <h4> 포장 하시겠습니까? </h4>
                    </div>
                    <div className = "optionDiv">
                        <div className = "packageOption">
                            <div className = "optionName">
                                <p> 포장 </p>
                            </div>
                            <div className="optionSelect">

                                <div className = "optionSelectBtn">
                                    <img className = "selectBtnImg" src = { takeAway }/>
                                    <p> 포장 주문 </p>
                                </div>
                                <div className = "optionSelectBtn">
                                    <img className = "selectBtnImg" src = { inStore }/>
                                    <p> 매장 취식 </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </Modal.Body>



                <Modal.Footer className = "modalFooter">
                    <Button variant="secondary" onClick={ props.handleClose }>
                        돌아가기
                    </Button>
                    <Button variant="primary" onClick={ props.handleClose }>
                        주문추가
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MenuSelectModal