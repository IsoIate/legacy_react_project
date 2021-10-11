import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Setting.css';
import DBResetModal from "./DBResetModal";
import multer from 'multer';
import fs from 'fs';


function Setting() {

    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const open = () => setShow(true);

    return (
        <>
            <div className = "totalDiv">
                <LeftNav/>
                <div className = "rightDiv">
                    <AdminNav/>
                    <div>
                        <h2 className = "settingHeader"> 설정 페이지 </h2>
                        <div className = "resetDiv">
                            <div className = "resetRight">

                            </div>
                            <div className = "resetLeft">
                                <div className = "dbReset">
                                    <h3> 데이터베이스 초기화 </h3>
                                    <Button onClick = {() => {
                                        open();
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
            </div>

            {
                show === true ?
                    < DBResetModal show = { show } onHide = { close } />
                    : null
            }
        </>
    )
}

export default Setting;