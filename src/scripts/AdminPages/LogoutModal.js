import React from 'react'
import {Button, Modal} from "react-bootstrap";
import '../../css/AdminPages/LogoutModal.css'

function LogoutModal(props) {
    return (
        <div className = "logoutDiv">
            <Modal show = { props.show } onHide = { props.onHide }  >
                <Modal.Header className = "logoutHeader">
                    <div className = "headerDiv">
                        <h2> 로그아웃 하시겠습니까? </h2>
                    </div>
                </Modal.Header>

                <Modal.Body>

                </Modal.Body>

                <Modal.Footer className = "logoutFooter">
                    <Button variant="primary" onClick={() => {

                    }}> 로그아웃 </Button>

                    <Button variant="danger" onClick={() => {
                        props.onHide();
                    }}> 취소 </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LogoutModal;