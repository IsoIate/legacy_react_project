import React, { useState, useEffect } from 'react';
import {Button, Modal, Jumbotron} from 'react-bootstrap'

import '../css/MenuSelectModal.css'

function MenuSelectModal(props) {

    /*useEffect(() => {
        console.log("create");
        return function () {
            console.log("delete");
        }
    })*/

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
                        <div>
                            <h3> { props.coffee[props.id].title } </h3>
                        </div>
                        <div className="menuCountDiv">
                            <div className="countUpBtn" onClick={ () => {
                                props.setCount(props.count - 1);
                                console.log(props.count)
                            }}>
                               <div className="minus"></div>
                            </div>
                            <div className="menuCountNum">
                                <p> { props.count } </p>
                            </div>
                            <div className="countDownBtn"  onClick={ () => {
                                props.setCount(props.count + 1);
                                console.log(props.count)
                            }}>
                                <div className="plus"></div>
                            </div>
                        </div>
                        <div>
                            <p> 총 가격 : </p>
                            <h4> { props.coffee[props.id].price } </h4>
                        </div>


                    </div>
                </Modal.Header>
                <Modal.Body style={ { padding : "0" } }>
                    <div className="titleDiv">
                        <h4> 옵션을 선택해 주세요 </h4>
                    </div>
                    <div>
                        <p> 얼음많이 </p>
                        <p> 얼음보통 </p>
                        <p> 얼음적게 </p>
                    </div>
                    <div className="titleDiv">
                        <h4> 테이크아웃 하시겠습니까? </h4>
                    </div>
                    <div>
                        <p> 포장하기 </p>
                        <p> 매장취식 </p>
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