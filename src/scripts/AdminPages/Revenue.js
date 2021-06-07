import React, {useEffect, useState} from 'react'
import AdminNav from "./AdminNav";
import LeftNav from "./LeftNav";

import '../../css/AdminPages/Revenue.css';
import RevenueTable from "./RevenueTable";

function Revenue() {

    return (
        <div className = "revenueDiv">
            <LeftNav/>

            <div className="container mt-3" className = "rightDiv">
                <AdminNav/>

                <div className = "revenueHeader">
                    <h2 className="text-center">매출정보 페이지</h2>
                </div>

                <RevenueTable />
            </div>
        </div>
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