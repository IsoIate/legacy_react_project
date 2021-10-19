import React, {useEffect, useState} from 'react'
import { Button, Jumbotron } from "react-bootstrap";
import '../../css/AdminPages/TempPage.css'
import 아메리카노 from "../../img/coffee/americano.png";
import 카페라떼 from "../../img/coffee/cafelatte.png";
import 바닐라라떼 from "../../img/coffee/vanillalatte.png";
import 달고나버블라떼 from "../../img/bubbleTea/dalgonaBubbleLatte.png";
import $ from 'jquery';
import MakeCompModal from "./MakeCompModal";


function TempPage () {
    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const open = () => setShow(true);

    return (
        <div>
            <button onClick={ () => {
                open();
            }}> 테스트 </button>
            {
                show === true ?
                    < MakeCompModal show = { show } onHide = { close } />
                    : null
            }
        </div>
    )
}



export default TempPage;