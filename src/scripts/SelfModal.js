import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button} from "react-bootstrap"
import qrcodeImg from '../img/qrcodeImg.png'
import '../css/QRModal.css'

function SelfModal(props) {

    let history = useHistory();

    useEffect(() => {

    })

    return (
        <>
            <Modal selfShow = { props.selfShow } onHide = { props.selfHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 직접 출입명부 작성 </h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className = "qrBody">
                        <h3> 오늘 날짜를 작성해 주세요 </h3>

                    </div>
                    <div>
                        <h3> 지역구를 작성해 주세요 </h3>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        history.push("./MainPage/0")
                    }}>
                        작성 완료 </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SelfModal;