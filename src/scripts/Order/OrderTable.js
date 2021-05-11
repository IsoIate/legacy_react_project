import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import '../../css/OrderTable.css'

function OrderTable(props) {

    let [tableIndex, setIndex] = useState([1]);
    let [orderMenu, setOrderMenu] = useState([]);
    let [orderCount, setOrderCount] = useState([]);
    let [orderPrice, setOrderPrice] = useState([]);
    let tempIndex = [];
    let tempMenu = [];
    let tempCount = [];
    let tempPrice = [];

    useEffect(() => {
        return (
            props.orderMenu == "temp" ? null
                :
            tempIndex = [...tableIndex],
            tempIndex[tempIndex.length] = props.orderCount,
            setIndex(tempIndex),

            tempMenu = [...orderMenu],
            tempMenu[tempMenu.length] = props.orderMenu,
            setOrderMenu(tempMenu),

            tempCount = [...orderCount],
            tempCount[tempCount.length] = props.orderCount,
            setOrderCount(tempCount),

            tempPrice = [...orderPrice],
            tempPrice[tempPrice.length] = props.orderPrice,
            setOrderPrice(tempPrice)
        )
    }, [props.orderMenu])

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
                { tableIndex.map(function (num, index) {
                    return (
                        orderMenu[index] == "temp" ? null
                            :
                        <tr className = "tableBody">
                            <td> { index } </td>
                            <td colSpan={5}> { orderMenu[index] } </td>
                            <td> { orderCount[index] } </td>
                            <td> { orderPrice[index] } </td>
                            <td> <Button onClick = {() => {

                            }}> X </Button> </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default OrderTable;