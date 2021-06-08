import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import AdminNav from "./AdminNav";
import '../../css/AdminPages/AdminPage.css'
import LeftNav from "./LeftNav";
import RevenueTable from "./RevenueTable";
import axios from "axios";

function AdminPage() {
    let history = useHistory();
    let [data, setData] = useState(null);
    let [price, setPrice] = useState(0);
    let [people, setPeople] = useState(0);
    let callPage = 1;

    useEffect(() => {

        axios.get('/getPrice')

            .then(( res ) => {
                setData(res.data)
            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    useEffect(() => {
        axios.get('/getId')
            .then((res) => {
                console.log(res.data)
                setPeople(res.data);
            })
            .catch((error) => { console.log( error ) })
    }, [])

    useEffect(() => {
        return (
            data == null ?
                null
                : setPrice(data.reduce((sum, value) => {
                    return sum + value;
                }, 0))
        )
    })

    return (
        <div className = "totalDiv">
            <LeftNav/>
            <div className = "rightDiv">
                <AdminNav/>

                <div className = "container-fluid contents">
                    <div className = "row topTables">
                        <div className = "container col-lg-11 status">
                            <h2 className = "titleHeader">
                                총 매출 <i className="fas fa-angle-right fa-1x"></i>
                            </h2>
                            <div className = "totalRevDiv">
                                <div className = "leftBox">
                                    <h2> 총 매출 </h2>
                                    <div className = "getInline">
                                        <div className = "revText">
                                            <h1> { price } </h1>
                                            <h3>원</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className = "centerBox">
                                    <h2> 결제방법 </h2>
                                    <div className = "getInline">
                                        <div className = "payMethod">
                                            <div>
                                                <h3> 현금 </h3>
                                                <h3>1,000,000원</h3>
                                            </div>
                                            <div>
                                                <h3> 카드 </h3>
                                                <h3>1,000,000원</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "rightBox">
                                    <h2> 이용객 수 </h2>
                                    <div className = "getInline">
                                        <div className = "peopleCount">
                                            <h1> { people } </h1>
                                            <h3>명</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className = "row btmTables">
                        <div className = "container col-lg-11 recentRev">
                            <h2>
                                최근매출 <i className="fas fa-angle-right fa-1x"></i>
                            </h2>
                            <div>
                                <RevenueTable callPage = { callPage } />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;