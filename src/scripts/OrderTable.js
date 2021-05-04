import React from 'react'
import '../css/OrderTable.css'

function OrderTable() {

    let tableIndex = [1,2,3,4,5];

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
                        <tr>
                            <td> { index + 1 } </td>
                            <td colSpan={5}> # </td>
                            <td> # </td>
                            <td> # </td>
                            <td> X </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default OrderTable;