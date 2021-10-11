import React, {useEffect, useState} from 'react'
import { Button, Jumbotron } from "react-bootstrap";
import '../../css/AdminPages/TempPage.css'
import 아메리카노 from "../../img/coffee/americano.png";
import 카페라떼 from "../../img/coffee/cafelatte.png";
import 바닐라라떼 from "../../img/coffee/vanillalatte.png";
import $ from 'jquery';

function TempPage () {

    return (
        <div>
            <div style = {{ overflow : "hidden" }}>
                <div className ={ 'slide-container' }>
                    <div className = "slide-box">
                        <img src={ 아메리카노 }/>
                    </div>
                    <div className = "slide-box">
                        <img src={ 카페라떼 }/>
                    </div>
                    <div className = "slide-box">
                        <img src={ 바닐라라떼 }/>
                    </div>
                </div>
            </div>
            <button className = "btn" onClick={ () => {
                console.log("click1")
                $('.slide-container').css('transform', 'translateX(0vw)');
            }}> 1 </button>
            <button className = "btn" onClick={ () => {
                console.log("click2")
                $('.slide-container').css('transform', 'translateX(-100vw)');
            }}> 2 </button>
            <button className = "btn" onClick={ () => {
                console.log("click3")
                $('.slide-container').css('transform', 'translateX(-200vw)');
            }}> 3 </button>
        </div>
    )
}

export default TempPage;