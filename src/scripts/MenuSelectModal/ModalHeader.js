import React from "react";
import {Jumbotron, Modal} from "react-bootstrap";
import "../../css/MenuSelectModal/ModalHeader.css"

function ModalHeader(props) {
    return (
        <div className = "header" >
            <Jumbotron className = "Jumbo">
                <h1> 주문메뉴 선택 </h1>
            </Jumbotron>

            <div className = "headerContent">
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
            </div>
        </div>
    )
}

export default ModalHeader;

