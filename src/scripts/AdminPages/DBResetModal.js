import React, {useState} from 'react'
import {Button, Modal} from "react-bootstrap";
import '../../css/AdminPages/DBResetModal.css'
import axios from "axios";

function DBResetModal(props) {

    let [loading, setLoading] = useState(false);

    return (
        <div className = "logoutDiv">
            <Modal show = { props.show } onHide = { props.onHide } backdrop = { "static" } keyboard = { false } >
                <Modal.Header className = "logoutHeader">
                    <div className = "headerDiv">
                        <h2> 데이터베이스를 <br/> 초기화 하시겠습니까? </h2>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <div className ={ loading == true ? "visibleLoading" : "hiddenLoading" }>
                        {console.log(loading)}
                        <p> ... </p>
                    </div>
                </Modal.Body>

                <Modal.Footer className = "logoutFooter">
                    <Button variant="primary" onClick={() => {
                        setLoading(true);
                        axios.delete('/dbReset', {data: {}})
                            .then((res) => {
                                alert("초기화 되었습니다.")
                                props.onHide();
                                setLoading(false);
                            })
                    }}> 초기화 </Button>

                    <Button variant="danger" onClick={() => {
                        props.onHide();
                    }}> 취소 </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DBResetModal;