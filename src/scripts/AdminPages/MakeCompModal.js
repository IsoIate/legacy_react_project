import React, {useEffect, useRef, useState} from 'react';
import Countdown from 'react-countdown';
import {Button, Modal} from "react-bootstrap";
import '../../css/AdminPages/MakeCompModal.css'

function MakeCompModal(props) {
    const renderer = ({ seconds }) => {
        return (
            <span> { seconds }초 후에 창이 닫힙니다. </span>
        );
    };

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header className = "modalHeader">
                    <h3><i className="far fa-check-circle"></i> 제조 완료 </h3>
                </Modal.Header>

                <Modal.Body>
                    <h4> 메뉴 제조를 완료했습니다. </h4>
                </Modal.Body>

                <Modal.Footer>
                    <Countdown date={Date.now() + 3000} renderer = { renderer } />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MakeCompModal;