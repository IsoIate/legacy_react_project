import React from 'react'
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Counter.css';
import { Button } from "react-bootstrap";

function Counter() {
    return (
        <div className = "counterDiv">
            <LeftNav/>

            <div className="container mt-3" className = "rightDiv">
                <AdminNav/>

                <div className = 'container-fluid tableDiv' >
                    <table className="table table-striped table-bordered counterTable ">
                        <tr className = "tableHeader" >
                            <th> # </th>
                            <th style={{width : "30%"}}> 메뉴명 </th>
                            <th> 수량 </th>
                            <th style={{width : "40%"}}> 옵션 </th>
                            <th> 제조완료 </th>
                        </tr>
                        <TableBody/>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Primary (props) {
    return (
        props.data.map((num, index) => {
            return (
                props.callPage == 1 ?
                    index >= 3 ? null
                        : <TableBody data = { props.data } index = { index } />
                    : <TableBody data = { props.data } index = { index } />
            )
        })
    )
}

function TableBody(props) {
    return (
        <>
            <tr className = "tableBody">
                <td>
                    1
                </td>
                <td>
                    아메리카노
                </td>
                <td>
                    1
                </td>
                <td>
                    옵션 없음
                </td>
                <td>
                    <Button> 확인 </Button>
                </td>
            </tr>
        </>
    )
}

export default Counter;