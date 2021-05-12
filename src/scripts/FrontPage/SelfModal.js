import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button} from "react-bootstrap"
import qrcodeImg from '../../img/qrcodeImg.png'
import '../../css/SelfModal.css'

function SelfModal(props) {

    let history = useHistory();
    let [name, setName] = useState("");
    let [location, setLocation] = useState("");
    let [phone, setPhone] = useState("");

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 수기명부 작성 </h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className = "selfBody">
                        <div className = "modalTitle" >
                            <h3 style = {{textAlign : "center"}}> 수기명부 작성을 위해 <br/>아래 사항을 작성해 주세요 </h3>
                        </div>
                        <div className = "inputBox">
                            <span className = "labelBox">
                                <h2>이름 : </h2>
                            </span>
                            <span>
                                <input onChange={(e) => { setName(e.target.value) }} />
                            </span>

                        </div>
                        <div className = "inputBox">
                            <span>
                                <h2>지역구 : </h2>
                            </span>
                            <span>
                                <input onChange={(e) => { setLocation(e.target.value) }} />
                            </span>
                        </div>
                        <div className = "inputBox">
                            <span>
                                <h2>전화번호 : </h2>
                            </span>
                            <span>
                                <input onChange={(e) => { setPhone(e.target.value) }} />
                            </span>
                        </div>
                        <div className = "cafeName">
                            <h1> ABC 카페 </h1>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        /*console.log("name : " + name);
                        console.log("location : " + location);
                        console.log("phone : " + phone);*/
                        history.push("./MainPage/0")
                    }}>
                        작성 완료 </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SelfModal;