import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import '../../css/Order/OrderTable.css'
import { connect } from "react-redux";

function OrderTable(props) {

    return (
        <div>
            <table className="table table-striped table-bordered orderTable ">
                <tr className = "tableHeader" >
                    <th> # </th>
                    <th colSpan={5}> 메뉴명 </th>
                    <th> 수량 </th>
                    <th> 가격 </th>
                    <th> 취소 </th>
                </tr>
                { props.state.map(function (num, index) {
                    return (
                        <tr className = "tableBody">
                            <td> { index + 1 } </td>
                            <td colSpan={5}> { props.state[index].title } </td>
                            <td> { props.state[index].count } </td>
                            <td> { props.state[index].price } </td>
                            <td> <Button variant="danger" onClick = {() => {
                                props.dispatch({ type : "항목제거", payload : index })
                                props.dispatch({ type : "주문제거",
                                    payload : { count: props.state[index].count, price: props.state[index].price } })
                            }}> X </Button> </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

/* state를 props로 변환 */
function Conversion(state) {
    return {
        state : state.reducer,
        orderState : state.orderReducer
    }
}

export default connect(Conversion)(OrderTable);