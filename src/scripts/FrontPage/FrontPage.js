import React, {useEffect, useState} from 'react';
import {Link, Route, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import qrcode from "../../img/qrcode.png"

import Title from './Title.js'
import '../../css/FrontPage.css'
import guide from '../../img/guide.png'
import QRModal from "./QRModal";
import SelfModal from "./SelfModal";

function FrontPage(props) {
    let history = useHistory();

    const [show, setShow] = useState(false);
    const [selfShow, selfSetShow] = useState(false);

    const qrClose = () => setShow(false);
    const qrOpen = () => setShow(true);
    const selfClose = () => selfSetShow(false);
    const selfOpen = () => selfSetShow(true);

    useEffect(() => {
        /*console.log("id : " + props.id)*/
    })

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
                        qrOpen();
                    }}> QR코드로 출입명부 작성하기 </Button>



                    <Button className = "writeBtn" size="lg" onClick={() => {
                        selfOpen();
                    }}> 직접 출입명부 작성하기 </Button>


                    {
                        show === true ?
                            <QRModal show = { show } onHide = {qrClose}/>
                            : null
                    }
                    {
                        selfShow === true ?
                            <SelfModal selfShow = { selfShow } selfHide = { selfClose } />
                            : null
                    }

                </div>
            </div>
        </>
    )
}


export default FrontPage