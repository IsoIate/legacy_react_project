import React, {useEffect, useState} from 'react'
import axios from "axios";

function VarietyTable() {

    let [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/getVariety')
            .then((res) => {
                console.log(res.data.comp);
                setData(res.data.comp);
            })
            .catch((error) => { console.log(error) })
    }, [])


    return (
        <>
            <div className = { "tableDiv2" } >
                <table className="table table-striped table-bordered revenueTable ">
                    <tr className = "tableHeader" >
                        <th> # </th>
                        <th> 종류 </th>
                        <th> 수량 </th>
                        <th> 가격 </th>
                    </tr>
                    {
                        data != null ?
                            data.map((num, index) => {
                                return (
                                    <TableBody data = { data } index = { index } />
                                )
                            })
                            : null
                    }
                </table>
            </div>
        </>
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
                    { props.data[props.index].종류 }
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

export default VarietyTable;