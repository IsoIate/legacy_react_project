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

import size from '../img/size.png'

function MenuSelectModal(props) {

    let [sizeSelect, sizeChange] = useState(1);
    let [cost, costChange] = useState(0);
    let [iceSelect, iceChange] = useState(1);
    let [syrupSelect, syrupChange] = useState(1);
    let [packageSelect, packageChange] = useState(1);

    useEffect(() => {

    })

    return (
        <div className="MenuSelectModal">
            <Modal className = "menuModal" size = "lg" show ={ props.show } onHide ={ props.handleClose }>
                <Jumbotron className = "Jumbo">
                    <h1> 주문메뉴 선택 </h1>
                </Jumbotron>
                <Modal.Header className = "header" >
                    <div className="menuImageDiv">
                        <img className="menuImage" src={ props.menuImg[props.id][props.clickNum] }/>
                    </div>
                    <div className="menuInfoDiv">
                        <div className="menuTitleDiv">
                            <h2> { props.menuItem[props.id][props.clickNum].title } </h2>
                            {
                                props.pageCheck === 1 ?
                                    <h4> { props.menuItem[props.id][props.clickNum].comment } </h4>
                                    : null
                            }
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
                                <h3> { props.menuItem[props.id][props.clickNum].price } 원 </h3>
                            </div>
                        </div>
                        <div className="totalPriceDiv">
                            <h3> 총 : </h3>
                            <h2> { ( props.menuItem[props.id][props.clickNum].price ) * props.count } </h2>
                            <h3> 원 </h3>
                        </div>


                    </div>
                </Modal.Header>
                <Modal.Body style={ { padding : "0" } }>
                    <div className="titleDiv">
                        { props.pageCheck === 0 ? <h4> 사이즈를 선택해 주세요 </h4> : <h4> 컵의 크기를 선택해 주세요 </h4> }
                    </div>
                    <div className = "optionDiv">
                        <div className = "packageOption">
                            <div className = "optionName">
                                { props.pageCheck === 0 ? <p> 사이즈 </p> : <p> 컵 크기 </p> }
                            </div>
                            <div className="optionSelect">
                                <div className = "optionImages">
                                    <div className = { sizeSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        sizeChange(1);

                                    }}>
                                        <img className = "selectBtnImg" src = { mediumCup }/>
                                        { props.pageCheck === 0 ? <p> 미디엄 </p> : <p> 중간 크기 </p> }
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = { sizeSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        sizeChange(2);

                                    }}>
                                        <img className = "selectBtnImg" src = { largeCup }/>
                                        { props.pageCheck === 0 ? <p> 라지 </p> : <p> 큰 크기 </p> }
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = "commentDiv">
                                        { props.pageCheck === 1 ?
                                            <div className = "sizeComment">
                                                <table >
                                                    <tr>
                                                        <th > 중간 크기 </th>
                                                        <th > 큰 크기 </th>
                                                    </tr>
                                                    <tr >
                                                        <td > 작은 물병 크기</td>
                                                        <td > 큰 물병 크기 </td>
                                                    </tr>
                                                    <tr>
                                                        <td> 약 300ml </td>
                                                        <td> 약 500ml </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="titleDiv">
                        { props.pageCheck === 0 ? <h4> 옵션을 선택해 주세요 </h4> : <h4> 기호를 선택해 주세요 </h4> }
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
                                        <p> 얼음 조금 </p>
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
                                { props.pageCheck === 0 ? <p> 시럽 </p> : <p> 당도 </p> }
                            </div>
                            <div className="optionSelect">
                                <div className = "optionImages">
                                    <div className = { syrupSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        syrupChange(1);
                                    }}>
                                        <img className = "selectBtnImg" src = { noSyrup }/>
                                        { props.pageCheck === 0 ? <p> 시럽 없음 </p> : <p> 달지 않게 </p> }
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                    <div className = { syrupSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                        syrupChange(2);
                                    }}>
                                        <img className = "selectBtnImg" src = { syrup }/>
                                        { props.pageCheck === 0 ? <p> 시럽 추가 </p> : <p> 더 달게 </p> }
                                        <p className = "upgradeP"> + 0 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="titleDiv">
                        { props.pageCheck === 0 ? <h4> 테이크아웃 하시겠습니까? </h4> : <h4> 포장 하시겠습니까? </h4> }
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
                                        { props.pageCheck === 0 ? <p> 테이크아웃 </p> : <p> 포장하기 </p> }
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
                    <Button className = "backBtn" variant="secondary" onClick={ props.handleClose }>
                        <p> 돌아가기 </p>
                    </Button>
                    <Button  className = "orderAddBtn" onClick={ () => {
                        props.handleClose();
                        props.totalCountChange(props.count);
                        props.totalPriceChange(( props.menuItem[props.id][props.clickNum].price ) * props.count);
                    } }>
                        <p> 주문추가 </p>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MenuSelectModal