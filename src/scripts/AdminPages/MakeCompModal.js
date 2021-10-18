import React from 'react';
import {Button, Modal} from "react-bootstrap";


function MakeCompModal(props) {
    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header className = "resetHeader">
                    <div className = "headerDiv">
                        <h1><i className="fas fa-exclamation-triangle"></i> 제조 완료 <i
                            className="fas fa-exclamation-triangle"></i></h1>
                    </div>

                </Modal.Header>

                <Modal.Body className = "resetBody">
                    <div>
                        <h3> 메뉴 제조를 완료했습니다. </h3>
                    </div>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="success" onClick={() => {
                        props.onHide();
                    }}> 확인 </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MakeCompModal;