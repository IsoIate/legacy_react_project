import React, { useState, useEffect } from "react";
import AutoLogoutModal from "./AutoLogoutModal";

function Timer () {

    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(59);
    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const open = () => setShow(true);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                    open();
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }

        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return(
        <>
            <div style={{display : "flex", flexDirection : "row" , alignItems : "center"}}>
                <h4 style={{marginRight : "7px"}}>
                    자동 로그아웃까지 :
                </h4>
                <h3>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h3>
            </div>

            {
                show == true ?
                    < AutoLogoutModal show = { show } onHide = { close } />
                    : null
            }
        </>
    )
}

export default Timer;