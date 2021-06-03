import React from 'react';
import { useHistory } from 'react-router-dom'
import AdminNav from "./AdminNav";
import '../../css/AdminPage.css'
import drink from '../../img/drink.png';
import axios from "axios";

function AdminPage() {
    let history = useHistory();
    let title = ['공지사항', '게시판', '매출관리', '설정'];
    let titleLink = ['', '', '/AdminPage/Revenue', ''];

    return (
        <div className = "totalDiv">
            <div className = "leftDiv">
                <div className = "banner">
                    <h2> ABC Cafe </h2>
                </div>
                <div className = "navBar">
                    {
                        title.map(function (num, index) {
                            return (
                                <div className = "navBtn">
                                    <img className = "navImg" src = { drink } />

                                    <a href = { titleLink[index] } > { title[index] } </a>
                                    { console.log( )}
                                    <span className = "arrowIcon">
                                        <i className="fas fa-angle-right fa-2x"></i>
                                    </span>

                                    {/*<span className = "navTitle">

                                    </span>
                                    */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className = "rightDiv">
                <AdminNav/>
                <div className = "row abc">
                    <div className = "container col-md-5 status">
                        <h4 className = "titleHeader" onClick = {() => {
                            axios.get('https://codingapple1.github.io/shop/data2.json')
                                .then((result)=>{ console.log(result.data) })
                                .catch(()=>{ console.log("error") })
                        }}>
                            매출현황 <i className="fas fa-angle-right fa-1x"></i>
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
                    <div className = "container col-md-5 revenue">
                        <h4 className = "titleHeader" onClick = {() => {
                            history.push('#');
                        }}>
                            주간매출 <i className="fas fa-angle-right fa-1x"></i>
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
                <div className="container col-md-10 notice ">
                    <h4 className = "noticeHeader" onClick = {() => {
                        history.push('#');
                    }}>
                        공지사항 <i className="fas fa-angle-right fa-1x"></i>
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
        </div>
    )
}

export default AdminPage;