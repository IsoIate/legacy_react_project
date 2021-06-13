import React, {useState} from 'react'
import {Button, Modal} from "react-bootstrap";
import '../../css/AdminPages/DBResetModal.css'
import dbImg from '../../img/database.png';
import axios from "axios";

function DBResetModal(props) {

    let [loading, setLoading] = useState(false);

    return (
        <div className = "resetDiv">
            <Modal show = { props.show } onHide = { props.onHide } backdrop = { "static" } keyboard = { false } >
                <Modal.Header className = "resetHeader">
                    <div className = "headerDiv">
                        <h1><i className="fas fa-exclamation-triangle"></i> 경고 <i
                            className="fas fa-exclamation-triangle"></i></h1>
                    </div>

                </Modal.Header>

                <Modal.Body className = "resetBody">
                    <div>
                        <h3 className = { loading == true ? "hiddenText" : "warningText" }>
                            초기화 실행시 복구가 불가능합니다.<br/> 정말 초기화 하시겠습니까? </h3>
                        <div className ={ loading == true ? "visibleText" : "hiddenText" } >
                            <div className = "dbImg">
                                <h2> 데이터베이스를 초기화 합니다. </h2>
                                <img src = {dbImg} />
                                <div>
                                    <p> DB 초기화... </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer className = "logoutFooter">
                    <Button variant="danger" onClick={() => {
                        setLoading(true);
                        axios.delete('/dbReset', {data: {}})
                            .then((res) => {
                                alert("초기화 되었습니다.")
                                props.onHide();
                                setLoading(false);
                            })
                    }}> 초기화 </Button>

                    <Button variant="success" onClick={() => {
                        props.onHide();
                    }}> 취소 </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DBResetModal;