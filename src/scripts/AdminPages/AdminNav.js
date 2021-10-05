import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../../css/AdminPages/AdminNav.css'
import LogoutModal from "./LogoutModal";
import Timer from "./Timer";
import logo from "../../img/cafelogo.png";
import LiveClock from "react-live-clock";

function AdminNav() {

    let history = useHistory();
    const date = new Date();

    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const open = () => setShow(true);

    return (

        <div className = "topNav">
            <div className = "topNavImgDIv">
                <img className = "logoImg" src = { logo }/>
                <p> Coffee House </p>
            </div>
            <div className = "topNavLeft">
                <div className = "date">
                    <div>
                        { date.getMonth() + 1 + "월 "}
                        { date.getDate() + "일"}
                    </div>
                    <div>
                        <LiveClock format ={"HH:mm:ss"} interval = { 1000 } ticking = { true } />
                    </div>
                </div>
                <div className = "closeBtn" onClick = { () => {
                    open()
                    /*history.push("/");*/
                }}>
                    <i className="fas fa-sign-out-alt fa-2x"></i>
                    <p> 퇴근하기 </p>
                </div>
            </div>

            {
                show === true ?
                    < LogoutModal show = { show } onHide = { close } />
                    : null
            }

        </div>
    )
}

export default AdminNav;
