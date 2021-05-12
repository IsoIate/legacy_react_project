import React, {useEffect, useState} from "react";
import mediumCup from "../../img/mediumCup.png";
import largeCup from "../../img/largeCup.png";
import {Modal} from "react-bootstrap";
import '../../css/SizeSelect.css'

function SizeSelect(props) {

    let tempPrice = props.menuPrice;

    useEffect(() => {
        props.sizeChange == 1 ? tempPrice = props.price : tempPrice = props.price + 1000
    })

    return (
        <>
            <div className="titleDiv">
                { props.pageCheck === 0 ? <h4> 사이즈를 선택해 주세요 </h4> : <h4> 컵의 크기를 선택해 주세요 </h4> }
            </div>
            <div className = "optionDiv">
                <div className = "sizeOption">
                    <div className = "optionName">
                        { props.pageCheck === 0 ? <p> 사이즈 </p> : <p> 컵 크기 </p> }
                    </div>
                    <div className="optionSelect">
                        <div className = "optionImages">
                            <div className = { props.sizeSelect === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                props.sizeChange(1);
                                tempPrice = props.menuPrice;
                            }}>
                                <img className = "selectBtnImg" src = { mediumCup }/>
                                { props.pageCheck === 0 ? <p> 미디엄 </p> : <p> 중간 크기 </p> }
                                <p className = "upgradeP"> + 0 </p>
                            </div>
                            <div className = { props.sizeSelect === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                props.sizeChange(2);
                                tempPrice = (props.menuPrice + 1000);
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
            { console.log(tempPrice) }
            { props.costChange(tempPrice) }
        </>
    )
}

export default SizeSelect;