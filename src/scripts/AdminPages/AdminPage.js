import React from 'react';
import { useHistory } from 'react-router-dom'
import AdminNav from "./AdminNav";
import '../../css/AdminPages/AdminPage.css'
import LeftNav from "./LeftNav";
import RevenueTable from "./RevenueTable";

function AdminPage() {
    let history = useHistory();


    return (
        <div className = "totalDiv">
            <LeftNav/>
            <div className = "rightDiv">
                <AdminNav/>

                <div className = "container-fluid contents">
                    <div className = "row topTables">
                        <div className = "container col-lg-5 status">
                            <h4 className = "titleHeader">
                                총 매출 <i className="fas fa-angle-right fa-1x"></i>
                            </h4>
                            <div>
                                <div>
                                    <p>총 매출</p>
                                    <h3> 3,000,000 </h3>
                                </div>
                                <div>
                                    <p> 현금 : 1,000,000원 </p>
                                    <p> 카드 : 2,000,000원 </p>
                                </div>
                            </div>
                        </div>

                        <div className = "container col-lg-5 recentRev">
                            <h4 className = "titleHeader" onClick = {() => {
                                history.push('#');
                            }}>
                                최근매출 <i className="fas fa-angle-right fa-1x"></i>
                            </h4>
                            <table className="table table-striped table-bordered orderTable ">
                                <tr className = "" >
                                    <th className = "no"> 글번호 </th>
                                    <th className = "title"> 제목 </th>
                                    <th className = "name"> 작성자 </th>
                                    <th className = "date"> 작성일 </th>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td> 1 </td>
                                    <td> 1 </td>
                                    <td> 1 </td>
                                </tr>
                            </table>
                        </div>

                    </div>

                    <div className = "btmTables">
                        <div className="container col-lg-11 revenue ">
                            <h4 className = "noticeHeader" onClick = {() => {
                                history.push('/AdminPage/Revenue');
                            }}>
                                매출현황 <i className="fas fa-angle-right fa-1x"></i>
                            </h4>

                            <RevenueTable/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminPage;