import React, {useEffect, useState} from 'react'
import { useAlert } from "react-alert";
import { useHistory } from 'react-router-dom'
import { Modal, Button} from "react-bootstrap"
import qrcodeImg from '../../img/qrcodeImg.png'
import '../../css/FrontPage/SelfModal.css'

function SelfModal(props) {

    let history = useHistory();
    let [name, setName] = useState("");
    let [location, setLocation] = useState("");
    let [phone, setPhone] = useState("");
    let [show, setShow] = useState(false);

    useEffect(() => {

        return (
            name === "" ? setShow(true)
                : location === "" ? setShow(true)
                : phone === "" ? setShow(true)

                : setShow(false)
        )
    })

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 수기명부 작성 </h2>
                    </div>
                </Modal.Header>
                <Modal.Body style={{padding : "0"}}>
                    <div className = "selfBody">
                        <div className = "modalTitle" >
                            <h3 style = {{textAlign : "center"}}> 수기명부 작성을 위해 <br/>아래 사항을 작성해 주세요 </h3>
                        </div>
                        <div className = "inputBox">
                            <span className = "labelBox">
                                <h2>이름 : </h2>
                            </span>
                            <span>
                                <input placeholder = { " 이름을 작성해 주세요 " }
                                    onChange={(e) => { setName(e.target.value) }} />
                            </span>

                        </div>
                        <div className = "inputBox">
                            <span>
                                <h2>주소 : </h2>
                            </span>
                            <span>
                                <input placeholder = { "거주지역 (구)을 작성해 주세요" }
                                    onChange={(e) => { setLocation(e.target.value) }} />
                            </span>
                        </div>
                        <div className = "inputBox">
                            <span>
                                <h2>전화번호 : </h2>
                            </span>
                            <span>
                                <input type = "text" /*onkeypress = { () => { return checkNumber(e) }}*/
                                       placeholder = {" 전화번호를 ' - ' 빼고 작성해 주세요 "}
                                       onChange={(e) => {
                                           const regex = /^[0-9\b -]{0,13}$/;
                                           if(regex.test(e.target.value)) {
                                               setPhone(e.target.value) }}
                                           }
                                />
                            </span>
                        </div>
                        <div className = "messageDiv">
                            <div className = "errorDiv">
                                <div className = { show === false ? "inputOk" : "inputError" } >
                                    <h2>이름, 지역구, 전화번호를 <br/> 올바르게 작성해 주세요</h2>
                                </div>
                            </div>
                            <div className = "cafeName">
                                <h1> ABC 카페 </h1>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" disabled = { show } onClick={() => {
                        history.push("./MainPage/0");

                        console.log("이름 : " + name);
                        console.log("주소 : " + location);
                        console.log("전화번호 : " + phone);
                    }}>
                        작성 완료 </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SelfModal;