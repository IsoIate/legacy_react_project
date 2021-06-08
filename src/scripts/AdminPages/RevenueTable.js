import React, {useEffect, useState} from 'react'
import axios from "axios";

function RevenueTable(props) {

    let [data, setData] = useState(null);
    let [idToggle, setIdToggle] = useState(false);
    let [menuToggle, setMenuToggle] = useState(false);
    let [price, setPrice] = useState([]);

    /* getRevenue라는 url로 접속했을 때 아래 코드 실행 */
    useEffect(() => {

        console.log("click");
        axios.get('/getRevenue')

            .then(( res ) => {
                setData(res.data.comp)
                console.log(res.data.comp)
            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    return (
        <>
            <div className = { props.callPage == 1 ? "tableDiv1" : "tableDiv2" } >
                <table className="table table-striped table-bordered revenueTable ">
                    <tr className = "tableHeader" >
                        <th onClick = {() => {
                            idToggle == false && setIdToggle(true)
                            idToggle == true && setIdToggle(false)
                        }}> # </th>
                        <th> 메뉴명 </th>
                        <th> 수량 </th>
                        <th> 가격 </th>
                    </tr>
                    {
                        data != null ?
                            props.callPage == 1 ?
                                <Reverse data = { data } callPage = { props.callPage } />
                                : idToggle == false ?
                                <Primary data = { data } callPage = { props.callPage } />
                                : <Reverse data = { data } callPage = { props.callPage } />
                                : null
                        /*menuToggle == false ?
                        <Primary data = { data } />
                        : <MenuSort data = { data } />*/
                    }
                </table>
            </div>
        </>
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

function Reverse (props) {
    return (
        props.data.reverse().map((num, index) => {
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
                    { props.data[props.index]._id }
                </td>
                <td>
                    { props.data[props.index].메뉴이름 }
                </td>
                <td>
                    { props.data[props.index].수량 }
                </td>
                <td>
                    { props.data[props.index].가격 }
                </td>
            </tr>
        </>
    )
}

export default RevenueTable;