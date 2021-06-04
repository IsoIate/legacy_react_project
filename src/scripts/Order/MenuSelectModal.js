import React, { useState, useEffect } from 'react';
import {Button, Modal, Jumbotron} from 'react-bootstrap'
import { connect } from "react-redux";
import SizeSelect from "../MenuSelectModal/SizeSelect";
import OptionSelect from "../MenuSelectModal/OptionSelect";
import PackageSelect from "../MenuSelectModal/PackageSelect";
import ModalHeader from "../MenuSelectModal/ModalHeader";
import '../../css/Order/MenuSelectModal.css'


function MenuSelectModal(props) {

    let [sizeSelect, sizeChange] = useState(1);
    let [cost, costChange] = useState(0);
    let [iceSelect, iceChange] = useState(1);
    let [syrupSelect, syrupChange] = useState(1);
    let [packageSelect, packageChange] = useState(1);

    return (
        <div className="MenuSelectModal">
            <Modal className = "menuModal" size = "lg" show ={ props.show } onHide ={ props.handleClose }>

                {/* 모달 헤더 */}
                <Modal.Header style={{padding : "0"}}>
                    <ModalHeader menuImg = { props.menuImg } menuItem = { props.menuItem }  clickNum = { props.clickNum }
                                 id = { props.id } pageCheck = { props.pageCheck } count = { props.count }
                                 setCount = { props.setCount } />
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
                            count : props.count, price : ( props.menuItem[props.id][props.clickNum].price ) * props.count,
                            temp : 123456789012345678901234567890 }})

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