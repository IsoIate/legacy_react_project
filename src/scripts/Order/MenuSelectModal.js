import React, { useState, useEffect } from 'react';
import {Button, Modal, Jumbotron} from 'react-bootstrap'
import { connect } from "react-redux";
import SizeSelect from "../MenuOption/SizeSelect";
import OptionSelect from "../MenuOption/OptionSelect";
import PackageSelect from "../MenuOption/PackageSelect";

import '../../css/MenuSelectModal.css'

function MenuSelectModal(props) {

    let [sizeSelect, sizeChange] = useState(1);
    let [cost, costChange] = useState(0);
    let [iceSelect, iceChange] = useState(1);
    let [syrupSelect, syrupChange] = useState(1);
    let [packageSelect, packageChange] = useState(1);

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

                    {/* 메뉴 사이즈 선택 */}
                    {
                        props.id != 7 ?
                            <SizeSelect pageCheck = { props.pageCheck } sizeSelect = { sizeSelect } sizeChange = { sizeChange }
                            menuPrice = { props.menuItem[props.id][props.clickNum].price } costChange = { costChange } />
                            : null
                    }



                    {/* 메뉴 옵션 선택 */}
                    {
                        props.id == 7 ? null : props.id == 2 ? null : props.id == 3 ? null
                        : <OptionSelect pageCheck = { props.pageCheck } iceSelect = { iceSelect } iceChange = { iceChange }
                                        syrupSelect = { syrupSelect } syrupChange = { syrupChange } id = { props.id } />
                    }

                    {/* 메뉴 포장 선택 */}
                    <PackageSelect pageCheck = { props.pageCheck } packageSelect = { packageSelect } packageChange = { packageChange } />

                </Modal.Body>

                <Modal.Footer className = "modalFooter">
                    <Button className = "backBtn" variant="secondary" onClick={ props.handleClose }>
                        <p> 돌아가기 </p>
                    </Button>
                    <Button  className = "orderAddBtn" onClick={ () => {
                        props.handleClose();

                        props.dispatch({type : "항목추가",
                            payload : { title : props.menuItem[props.id][props.clickNum].title,
                            count : props.count, price : ( props.menuItem[props.id][props.clickNum].price ) * props.count }})

                        props.dispatch({type : "주문추가", payload : { count : props.count,
                                price : ( props.menuItem[props.id][props.clickNum].price ) * props.count }})

                    } }>
                        <p> 주문추가 </p>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

/* state를 props로 변환 */
function Conversion(state) {
    return {
        state: state.reducer
    }
}

export default connect(Conversion)(MenuSelectModal);