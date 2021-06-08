import React from 'react'
import { useHistory } from 'react-router-dom';
import {Button, Modal} from "react-bootstrap";
import '../../css/AdminPages/AutoLogoutModal.css'

function AutoLogoutModal(props) {

    let history = useHistory();

    return (
        <div>
            <Modal show = { props.show } onHide = { props.onHide }  keyboard = { false }  >
                <Modal.Header className = "autoHeader">
                    <h2> 자동 로그아웃 </h2>
                </Modal.Header>

                <Modal.Body className = "autoBody">
                    <h3> 10분간 사용하지 않아 </h3>
                    <h3> 자동으로 로그아웃 됩니다. </h3>
                </Modal.Body>

                <Modal.Footer className = "autoFooter">
                    <Button variant="primary" onClick={() => {
                        history.push("/");
                    }}> 확인 </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AutoLogoutModal;