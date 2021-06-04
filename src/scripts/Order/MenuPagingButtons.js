import React from 'react'
import { Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import '../../css/Order/MenuPagingButtons.css'

function MenuPagingButtons () {



    return (
        <div className = "moveButtons">
            <Button className={ "leftBtn btn btn-primary"} onClick={() => {
                /*history.push("/");*/
            }}>
                <div className="leftArrow"></div>
                이전
            </Button>
            <Button className={"rightBtn"} onClick = { () => {

            }}>
                다음
                <div className="rightArrow"></div>
            </Button>
        </div>
    )
}

export default MenuPagingButtons;