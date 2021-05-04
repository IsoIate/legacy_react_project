import React, {useState} from 'react';
import {Link, Route, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import qrcode from "../img/qrcode.png"

import Title from './Title.js'
import '../css/FrontPage.css'
import guide from '../img/guide.png'
import QRModal from "./QRModal";

function FrontPage() {
    let history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        handleShow();
                    }}> QR코드로 출입명부 작성하기 </Button>

                    <QRModal show={show} onHide={handleClose} />

                    <Button className = "writeBtn" size="lg" onClick={() => {
                        history.push("./MainPage/0")
                    }}> 직접 출입명부 작성하기 </Button>
                </div>
            </div>
        </>
    )
}


export default FrontPage