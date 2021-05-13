import React, {useEffect} from "react";
import { connect } from "react-redux";

import iceDrink from "../../img/iceDrink.png";
import Drink from "../../img/drink.png";
import hotDrink from "../../img/hotDrink.png";
import noSyrup from "../../img/noSyrup.png";
import syrup from "../../img/syrup.png";
import {Modal} from "react-bootstrap";
import '../../css/OptionSelect.css'

function OptionSelect(props) {

    return (
        <>
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
                            <div className = { props.optionState[1] === 1 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                props.dispatch({ type : "얼음변경", payload : 1 })
                            }}>
                                <img className = "selectBtnImg" src = { iceDrink }/>
                                <p> 얼음 많이 </p>
                                <p className = "upgradeP"> + 0 </p>
                            </div>
                            <div className = { props.optionState[1] === 2 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                props.dispatch({ type : "얼음변경", payload : 2 })
                            }}>
                                <img className = "selectBtnImg" src = { Drink }/>
                                <p> 얼음 조금 </p>
                                <p className = "upgradeP"> + 0 </p>
                            </div>

                            {
                                props.id == 1 ? null : props.id == 4 ? null : props.id == 5 ? null :
                                <div className = { props.optionState[1] === 3 ? "optionSelectedBtn" : "optionSelectBtn" } onClick={() => {
                                    props.dispatch({ type : "얼음변경", payload : 3 })
                                }}>
                                    <img className = "selectBtnImg" src = { hotDrink }/>
                                    <p> 따뜻하게 </p>
                                    <p className = "upgradeP"> + 0 </p>
                                </div>
                            }

                        </div>
                    </div>
                </div>
                {
                    props.id == 1 ? null : props.id == 4 ? null : props.id == 5 ? null : props.id == 6 ? null :
                    <div className="syrupOption">
                        <div className="optionName">
                            {props.pageCheck === 0 ? <p> 시럽 </p> : <p> 당도 </p>}
                        </div>
                        <div className="optionSelect">
                            <div className="optionImages">
                                <div className={props.optionState[2] === 1 ? "optionSelectedBtn" : "optionSelectBtn"}
                                     onClick={() => {
                                         props.dispatch({ type : "시럽변경", payload : 1 })
                                         /*props.syrupChange(1);*/
                                     }}>
                                    <img className="selectBtnImg" src={noSyrup}/>
                                    {props.pageCheck === 0 ? <p> 시럽 없음 </p> : <p> 달지 않게 </p>}
                                    <p className="upgradeP"> + 0 </p>
                                </div>
                                <div className={props.optionState[2] === 2 ? "optionSelectedBtn" : "optionSelectBtn"}
                                     onClick={() => {
                                         props.dispatch({ type : "시럽변경", payload : 2 })
                                         /*props.syrupChange(2);*/
                                     }}>
                                    <img className="selectBtnImg" src={syrup}/>
                                    {props.pageCheck === 0 ? <p> 시럽 추가 </p> : <p> 더 달게 </p>}
                                    <p className="upgradeP"> + 0 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

/* state를 props로 변환 */
function Conversion(state) {
    return {
        optionState: state.optionReducer
    }
}

export default connect(Conversion)(OptionSelect);