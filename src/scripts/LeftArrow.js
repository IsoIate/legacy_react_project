import React from "react";
import '../css/Arrows.css'

function LeftArrow(props) {
    let left = "fas fa-chevron-circle-left fa-2x"

    return (
        props.menuState == false ?
            <p className = "menuArrow cursorDisable">
                <span style={{color: "gray"}}> <i className={left}></i> </span>
            </p>
            : <p className = "menuArrow"  onClick={() => {
                props.history.push("/");
            }}> <i className = { left } ></i> </p>
    )
}

export default LeftArrow