import React, {useEffect, useState} from 'react'
import AdminNav from "./AdminNav";
import LeftNav from "./LeftNav";

import '../../css/AdminPages/Revenue.css';
import RevenueTable from "./RevenueTable";
import { Tabs, Tab } from "react-bootstrap";
import VarietyTable from "./VarietyTable";

function Revenue() {

    let callPage = 2;
    let [click, setClick] = useState(0);

    return (

        <div className = "revenueDiv">
            <LeftNav/>

            <div className="container mt-3" className = "rightDiv">
                <AdminNav/>

                <div className = "revenueHeader">
                    <h2 className="text-center">매출정보 페이지</h2>
                </div>

                <Tabs defaultActiveKey="menu" transition={ false } id="noanim-tab-example" className="mb-3 tabs">

                    <Tab eventKey="menu" title="메뉴별 매출" tabClassName = "tab"
                         onClick = {() => {
                             setClick(0);
                         }}>
                        <RevenueTable callPage = { callPage } />
                    </Tab>
                    <Tab eventKey="variety" title="종류별 매출" tabClassName = "tab"
                         onClick = {() => {
                            setClick(1);
                        }}>
                        <VarietyTable />
                    </Tab>
                    <Tab eventKey="chart" title="차트보기" tabClassName = "tab"
                         onClick = {() => {
                            setClick(2);
                        }}>
                        <p>3</p>
                    </Tab>

                </Tabs>
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