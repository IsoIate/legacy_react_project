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
                /*console.log(res.data.comp)*/
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
                            <th style={{width : "10%"}}> 가격 </th>
                            <th style={{width : "40%"}}> 옵션 </th>
                        </tr>
                        <tr>
                            <td rowSpan={4}>1</td>
                            <td> 아메리카노 </td>
                            <td> 1 </td>
                            <td> 1500 </td>
                            <td> 없음 </td>
                        </tr>
                        <tr>
                            <td> 아메리카노 </td>
                            <td> 1 </td>
                            <td> 1500 </td>
                            <td> 없음 </td>
                        </tr>
                        <tr>
                            <td> 아메리카노 </td>
                            <td> 1 </td>
                            <td> 1500 </td>
                            <td> 없음 </td>
                        </tr>
                        <tr>
                            <td colSpan={3}> 제조완료 </td>
                            <td>
                                <button type = "submit" className = "submitBtn"> 확인 </button>
                            </td>
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
                            <td> { props.data[index].가격 } </td>
                            <td> 옵션 </td>
                            <td>
                                <form action = '/makeComp' method = "post" >
                                    <div style={{display : "none"}}>
                                        <input type = "text" value = { props.data[index]._id }
                                            name = "_id"/>
                                        <input type = "text" value = { props.data[index].메뉴이름 }
                                               name = "title"/>
                                        <input type = "text" value = { props.data[index].수량 }
                                               name = "count"/>
                                        <input type = "text" value = { props.data[index].가격 }
                                               name = "price"/>
                                    </div>
                                    <button type = "submit" className = "submitBtn"> 확인 </button>
                                </form>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Counter;