import React from 'react';
import {Link, Route, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import qrcode from "../img/qrcode.png"

import Title from './Title.js'
import '../css/FrontPage.css'
import guide from '../img/guide.png'

function FrontPage() {
    let history = useHistory();

    return (
        <>
            <Title/>
            <div className = "header">

            </div>
            <div className = "body">
                <div>
                    <img className = "qrcodeImg" src = { qrcode } />
                    <img className = "guideImg" src = { guide } />
                </div>
            </div>
            <div className = "footer">
                <div className = "btnDiv">
                    <Button className = "writeBtn" size="lg" onClick={() => {
                        history.push("/MainPage/:id")
                    }}> QR코드로 출입명부 작성하기 </Button>

                    <Button className = "writeBtn" size="lg" onClick={() => {
                        history.push("/MainPage/:id")
                    }}> 직접 출입명부 작성하기 </Button>
                </div>
            </div>
        </>
    )
}

export default FrontPage