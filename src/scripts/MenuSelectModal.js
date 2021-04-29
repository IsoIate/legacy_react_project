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
import mediumCup from '../img/mediumCup.png'
import largeCup from '../img/largeCup.png'

function MenuSelectModal(props) {

    let [sizeSelect, sizeChange] = useState(1);
    let [cost, costChange] = useState(0);
    let [iceSelect, iceChange] = useState(1);
    let [syrupSelect, syrupChange] = useState(1);
    let [packageSelect, packageChange] = useState(1);

    useEffect(() => {
        console.log("open modal")
    })

    return (
        <div className="MenuSelectModal">
            <Modal className = "menuModal" size = "lg" show ={ props.show } onHide ={ props.handleClose }>
                <Jumbotron className = "Jumbo">
                    <h1> 주문메뉴 선택 </h1>
                </Jumbotron>
                <Modal.Header className = "header" >
                    <div className="menuImageDiv">
                        <img className="menuImage" src={ props.coffeeImg[props.id] }/>
                    </div>
                    <div className="menuInfoDiv">
                        <div className="menuTitleDiv">
                            <h2> { props.coffee[0].title } </h2>
                        </div>
                        <div className="menuCountDiv">
                            <div className = { props.count === 1 ? "countBtnDisable" : "countDownBtn" } onClick={ () => {
                                props.count === 1 ?
                                    props.setCount(1) :
                                    props.setCount(props.count - 1);
                            }}>
                               <div className="minus"></div>
                            </div>
                            <div className="menuCountNum">
                                <p> { props.count } </p>
                            </div>
                            <div className = { props.count === 10 ? "countBtnDisable" : "countUpBtn" }  onClick={ () => {
                                props.count === 10 ?
                                    props.setCount(10) :
                                    props.setCount(props.count + 1);
                            }}>
                                <div className="plus"></div>
                            </div>
                            <div className = "menuPriceDiv">
                                <h3> { props.coffee[0].price } 원 </h3>
                            </div>
                        </div>
                        <div className="totalPriceDiv">
                            <h3> 총 : </h3>
                            <h2> { (props.coffee[0].price) * props.count } </h2>
                            <h3> 원 </h3>
                        </div>


                    </div>
                </Modal.Header>
                <Modal.Body style={ { padding : "0" } }>
                    <div className="titleDiv">
                        <h4> 사이즈를 선택해 주세요 </h4>
                    </div>
                    <div className = "optionDiv">
                        <div className = "packageOption">
                            <div className = "optionName">
                                <p>  사이즈 </p>
                            </div>
                            <div className="optionSelect">
                                <div className = "optionImages">
                                    <div className = { sizeSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        sizeChange(1);

                                    }}>
                                        <img className = "selectBtnImg" src = { mediumCup }/>
                                        <p> 미디엄 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = { sizeSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        sizeChange(2);

                                    }}>
                                        <img className = "selectBtnImg" src = { largeCup }/>
                                        <p> 라지 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="titleDiv">
                        <h4> 옵션을 선택해 주세요 </h4>
                    </div>
                    <div className = "optionDiv">
                        <div className = "iceOption">
                            <div className = "optionName">
                                <p> 얼음 </p>
                            </div>
                            <div className="optionSelect">
                                <div className = "optionImages">
                                    <div className = { iceSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        iceChange(1);
                                    }}>
                                        <img className = "selectBtnImg" src = { iceDrink }/>
                                        <p> 얼음 많이 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = { iceSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        iceChange(2);
                                    }}>
                                        <img className = "selectBtnImg" src = { Drink }/>
                                        <p> 얼음 적게 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = { iceSelect === 3 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        iceChange(3);
                                    }}>
                                        <img className = "selectBtnImg" src = { hotDrink }/>
                                        <p> 따뜻하게 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "syrupOption">
                            <div className = "optionName">
                                <p> 시럽 </p>
                            </div>
                            <div className="optionSelect">
                                <div className = "optionImages">
                                    <div className = { syrupSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        syrupChange(1);
                                    }}>
                                        <img className = "selectBtnImg" src = { noSyrup }/>
                                        <p> 시럽 없음 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = { syrupSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        syrupChange(2);
                                    }}>
                                        <img className = "selectBtnImg" src = { syrup }/>
                                        <p> 시럽 추가 </p>
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
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
                                <div className = "optionImages">
                                    <div className = { packageSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        packageChange(1);
                                    }}>
                                        <img className = "selectBtnImg" src = { takeAway }/>
                                        <p> 포장 주문 </p>
                                    </div>
                                    <div className = { packageSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        packageChange(2);
                                    }}>
                                        <img className = "selectBtnImg" src = { inStore }/>
                                        <p> 매장 취식 </p>
                                    </div>
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