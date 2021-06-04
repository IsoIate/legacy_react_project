import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AdminNav from "./AdminNav";
import LeftNav from "./LeftNav";

import '../../css/AdminPages/Revenue.css';

function Revenue() {

    let [data, setData] = useState(null);
    let [idToggle, setIdToggle] = useState(false);
    let [menuToggle, setMenuToggle] = useState(false);

    let [price, setPrice] = useState([]);

    useEffect(() => {

        console.log("click");
        axios.get('/getRevenue')

            .then(( res ) => {
                setData(res.data.comp)

            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    return (
        <div className = "revenueDiv">
            {/*{
                data != null ?
                    data.map((num, index) => {
                        setPrice(price + [...data[index].가격])
                        console.log(price)
                    })
                    : null
            }*/}
            <LeftNav/>
            <div className="container mt-3" className = "rightDiv">
                <AdminNav/>
                <div className = "revenueHeader">
                    <h2 className="text-center">매출정보 페이지</h2>
                </div>
                <div className="card" style = {{ width: "100%" }}>
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
                                idToggle == false ?
                                    <Primary data = { data } />
                                    : <Reverse data = { data } />
                                    : null
                                    /*menuToggle == false ?
                                    <Primary data = { data } />
                                    : <MenuSort data = { data } />*/
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
                <>
                    <tr className = "tableBody">
                        <td>
                            { props.data[index]._id }
                        </td>
                        <td>
                            { props.data[index].메뉴이름 }
                        </td>
                        <td>
                            { props.data[index].수량 }
                        </td>
                        <td>
                            { props.data[index].가격 }
                        </td>
                    </tr>
                </>
            )
        })
    )
}

function Reverse (props) {
    return (
        props.data.reverse().map((num, index) => {
            return (
                <>
                    <tr className = "tableBody">
                        <td>
                            { props.data[index]._id }
                        </td>
                        <td>
                            { props.data[index].메뉴이름 }
                        </td>
                        <td>
                            { props.data[index].수량 }
                        </td>
                        <td>
                            { props.data[index].가격 }
                        </td>
                    </tr>
                </>
            )
        })
    )
}

/*function MenuSort (props) {
    return (

        props.data.map((num, index) => {
            return (
                <>
                    <tr className = "tableBody">
                        <td>
                            { props.data[index]._id }
                        </td>
                        <td>
                            { props.data[index].메뉴이름 }
                        </td>
                        <td>
                            { props.data[index].수량 }
                        </td>
                        <td>
                            { props.data[index].가격 }
                        </td>
                    </tr>
                </>
            )
        })
    )
}*/

export default Revenue;