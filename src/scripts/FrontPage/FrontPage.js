import React, {useEffect, useState} from 'react';
import {Link, Route, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";

import Title from './Title'
import QRModal from "./QRModal";
import SelfModal from "./SelfModal";

import '../../css/FrontPage.css'
import qrcode from "../../img/qrcode.png"
import guide from '../../img/guide.png'

function FrontPage(props) {
    let history = useHistory();

    const [qrShow, setQrShow] = useState(false);
    const qrClose = () => setQrShow(false);
    const qrOpen = () => setQrShow(true);

    const [selfShow, setSelfShow] = useState(false);
    const selfClose = () => setSelfShow(false);
    const selfOpen = () => setSelfShow(true);

    return (
        <>
            <Title />
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
                        qrOpen();
                    }}> QR코드로 출입명부 작성하기 </Button>

                    <Button className = "writeBtn" size = "lg" onClick = {() => {
                        selfOpen();
                    }}> 수기로 출입명부 작성하기 </Button>

                </div>

                {
                    qrShow === true ?
                        < QRModal show = { qrShow } onHide = { qrClose } />
                        : selfShow === true ?
                        < SelfModal show = { selfShow } onHide = { selfClose } />
                        : null
                }

            </div>
        </>
    )
}


export default FrontPage