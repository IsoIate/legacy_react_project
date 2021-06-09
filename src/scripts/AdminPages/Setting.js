import React from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Setting.css';

function Setting() {
    return (
        <>
            <div className = "totalDiv">
                <LeftNav/>
                <div className = "rightDiv">
                    <AdminNav/>
                    <div>
                        <h1> Setting Page </h1>
                        <div className = "resetDiv">
                            <div className = "dbReset">
                                <h3> 데이터베이스 초기화 </h3>
                                <Button onClick = {() => {
                                    axios.delete('/dbReset', {data: {}})
                                        .then((res) => {
                                            console.log("delete success");
                                        })
                                }}> 초기화 </Button>
                            </div>
                            <div className = "pwReset">
                                <h3> 비밀번호 초기화 </h3>
                                <Button onClick = {() => {
                                    /*axios.get('/dbReset')
                                        .then((res) => {
                                            console.log(res.data);
                                        })*/
                                }}> 초기화 </Button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting;