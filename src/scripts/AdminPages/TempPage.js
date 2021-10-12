import React, {useEffect, useState} from 'react'
import { Button, Jumbotron } from "react-bootstrap";
import '../../css/AdminPages/TempPage.css'
import 아메리카노 from "../../img/coffee/americano.png";
import 카페라떼 from "../../img/coffee/cafelatte.png";
import 바닐라라떼 from "../../img/coffee/vanillalatte.png";
import 달고나버블라떼 from "../../img/bubbleTea/dalgonaBubbleLatte.png";
import $ from 'jquery';

let menu = [아메리카노, 카페라떼, 바닐라라떼, 달고나버블라떼]
let temp = [0, 1,2, 3]

function TempPage () {
    let translate = 0;
    return (
        <div className = "imgContainer">
            {
                temp.map((num, index) => {
                    return (
                        <div className = "imgDiv">
                            {
                                menu.map((num, index) => {
                                    return (
                                        <img src = { menu[index] } />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TempPage;