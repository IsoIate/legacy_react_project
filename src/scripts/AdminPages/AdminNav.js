import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../../css/AdminPages/AdminNav.css'
import LogoutModal from "./LogoutModal";

function AdminNav() {

    let history = useHistory();

    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const open = () => setShow(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className = "navDiv">
                    <h3 > ABC Cafe </h3>
                    <Button className = "logoutBtn" onClick = {() => {
                        open();
                    }}> 로그아웃 </Button>
                </div>
            </nav>

            {
                show === true ?
                    < LogoutModal show = { show } onHide = { close } />
                    : null
            }
        </>
    )
}

export default AdminNav;
