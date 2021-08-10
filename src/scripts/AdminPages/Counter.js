import React, {useEffect, useState} from 'react'
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Counter.css';
import { Button } from "react-bootstrap";
import axios from "axios";

function Counter() {

    let [data, setData] = useState(null);

    /* getCounter라는 url로 접속했을 때 아래 코드 실행 */
    useEffect(() => {

        axios.get('/getCounter')

            .then(( res ) => {
                setData(res.data.comp)
                console.log(res.data.comp)
            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

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

                        {
                            data != null ?
                                <TableBody data = { data } />
                                : null
                        }

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
            {
                props.data.map((num, index) => {
                    return (
                        <tr className = "tableBody">
                            <td> { props.data[index]._id } </td>
                            <td> { props.data[index].메뉴이름 } </td>
                            <td> { props.data[index].수량 } </td>
                            <td> 옵션 </td>
                            <td>
                                <Button> 확인 </Button>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Counter;