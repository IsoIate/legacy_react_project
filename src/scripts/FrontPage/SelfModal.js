import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button} from "react-bootstrap"
import qrcodeImg from '../../img/qrcodeImg.png'
import '../../css/QRModal.css'

function SelfModal(props) {

    let history = useHistory();

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 수기명부 작성 </h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className = "qrBody">
                        <h3 style = {{textAlign : "center"}}> 수기명부 작성을 위해 <br/>아래 사항을 작성해 주세요 </h3>
                        <img className = "qrcode" src = { qrcodeImg }/>
                        <h3> ABC 카페 </h3>
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