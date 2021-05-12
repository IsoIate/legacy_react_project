import React from "react";
import '../../css/Arrows.css'

function RightArrow(props) {
    let right = "fas fa-chevron-circle-right fa-2x"

    return (
        props.menuState == true ?
            <p className = "menuArrow cursorDisable">
                <span style={{color: "gray"}}> <i className={right}></i> </span>
            </p>
            : <p className = "menuArrow"  onClick={() => {
                props.history.push("/");
            }}> <i className= { right } ></i> </p>
    )
}

export default RightArrow