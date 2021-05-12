import React, {useEffect, useState} from 'react'
import MenuSelectModal from "./MenuSelectModal";


import coffeeData from "../../data/coffeeData";
import bubbleTeaData from "../../data/bubbleTeaData";
import frappeData from "../../data/frappeData";
import smoothieData from "../../data/smoothieData";
import adeData from "../../data/adeData";
import juiceData from "../../data/juiceData";
import teaData from "../../data/teaData";
import dessertData from "../../data/dessertData";

import coffee0 from "../../img/coffee/americano.png";
import coffee1 from "../../img/coffee/cafelatte.png";
import coffee2 from "../../img/coffee/vanillalatte.png";
import coffee3 from "../../img/coffee/cafemoca.png";
import coffee4 from "../../img/coffee/hazelnut.png";
import coffee5 from "../../img/coffee/caramelmacchiato.png";
import coffee6 from "../../img/coffee/tiramisulatte.png";

import bubbleTea0 from "../../img/bubbleTea/milkTeaBubbleLatte.png";
import bubbleTea1 from "../../img/bubbleTea/blackSugarBubbleLatte.png";
import bubbleTea2 from "../../img/bubbleTea/dalgonaBubbleLatte.png";
import bubbleTea3 from "../../img/bubbleTea/blackSugarSweetPotatoLatte.png";

import frappe0 from "../../img/frappe/javaChipFrappe.png";
import frappe1 from "../../img/frappe/cncFrappe.png";
import frappe2 from "../../img/frappe/mintChocoFrappe.png";
import frappe3 from "../../img/frappe/strawberryCreamFrappe.png";
import frappe4 from "../../img/frappe/greenTeaFrappe.png";

import smoothie0 from "../../img/smoothie/plainYogurt.png";
import smoothie1 from "../../img/smoothie/strayberryYogurt.png";
import smoothie2 from "../../img/smoothie/blueberryYogurt.png";
import smoothie3 from "../../img/smoothie/mangoYogurt.png";
import smoothie4 from "../../img/smoothie/strawberryBananaYogurt.png";
import smoothie5 from "../../img/smoothie/mangoBananaYogurt.png";
import smoothie6 from "../../img/smoothie/appleMangoCrush.png";

import ade0 from "../../img/ade/grapefruitLimeAde.png";
import ade1 from "../../img/ade/greenGrapeAde.png";
import ade2 from "../../img/ade/lemonAde.png";
import ade3 from "../../img/ade/blueLemonAde.png";
import ade4 from "../../img/ade/citronAde.png";
import ade5 from "../../img/ade/calamansiAde.png";

import juice0 from "../../img/juice/bananaJuice.png";
import juice1 from "../../img/juice/tomatoJuice.png";
import juice2 from "../../img/juice/kiwiJuice.png";

import tea0 from "../../img/tea/blueTangerineTea.png";
import tea1 from "../../img/tea/gingerTea.png";
import tea2 from "../../img/tea/lemonTea.png";
import tea3 from "../../img/tea/grapefruiteTea.png";
import tea4 from "../../img/tea/citronTea.png";
import tea5 from "../../img/tea/peppermintTea.png";
import tea6 from "../../img/tea/chamomileTea.png";

import dessert0 from "../../img/dessert/cheeseCake.png";
import dessert1 from "../../img/dessert/tiramisuCake.png";
import dessert2 from "../../img/dessert/chocomousseCake.png";
import dessert3 from "../../img/dessert/plainCroffle.png";
import dessert4 from "../../img/dessert/icecreamCroffle.png";
import dessert5 from "../../img/dessert/coffeeBeanBread.png";
import dessert6 from "../../img/dessert/custardCreamBread.png";

import '../../css/MenuDisplay.css'

function MenuDisplay(props) {

    let [coffee] = useState(coffeeData);
    let [bubbleTea] = useState(bubbleTeaData);
    let [frappe] = useState(frappeData);
    let [smoothie] = useState(smoothieData);
    let [ade] = useState(adeData);
    let [juice] = useState(juiceData);
    let [tea] = useState(teaData);
    let [dessert] = useState(dessertData);

    let coffeeImg = [coffee0, coffee1, coffee2, coffee3, coffee4, coffee5, coffee6];
    let bubbleTeaImg = [bubbleTea0, bubbleTea1, bubbleTea2, bubbleTea3];
    let frappeImg = [frappe0, frappe1, frappe2, frappe3, frappe4];
    let smoothieImg = [smoothie0, smoothie1, smoothie2, smoothie3, smoothie4, smoothie5, smoothie6];
    let adeImg = [ade0, ade1, ade2, ade3, ade4, ade5];
    let juiceImg = [juice0, juice1, juice2];
    let teaImg = [tea0, tea1, tea2, tea3, tea4, tea5, tea6  /*, 나중에 수정 tea7*/];
    let dessertImg = [dessert0, dessert1, dessert2, dessert3, dessert4, dessert5, dessert6];

    let menuItem = [ coffee, bubbleTea, frappe, smoothie, ade, juice, tea, dessert ];
    let menuImg = [coffeeImg, bubbleTeaImg, frappeImg, smoothieImg, adeImg, juiceImg, teaImg, dessertImg ];

    const menuIndex = menuItem[props.id].length - 1
    let [clickNum, clickNumChange] = useState(0);

    let [pageCheck, pageCheckChange] = useState(0);

    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        pageCheckChange(props.pageNum);
        return (
            show === false ? setCount(1) : null
        )
    })

    return (
        menuItem[props.id].map(function (num, index) {
            return (
                <>
                    <div className={ pageCheck === 0 ? "col-lg-3 menuBox" : "col-lg-4 menuBox"} onClick={ () => {
                        handleShow();
                        clickNumChange(index);
                    } }>
                        { index < 3 ?
                            <div>
                                <div>
                                    <img className = "menuImg" src = { menuImg[props.id][index] } />
                                </div>
                                <div className = "menuContext">
                                    <p> { menuItem[props.id][index].title } </p>
                                    <p> { menuItem[props.id][index].price + " 원"} </p>
                                </div>
                            </div>
                            : <div>
                                <div>
                                    <img className = "menuImg" src = { menuImg[props.id][index] } />
                                </div>
                                <div className = "menuContext">
                                    <p> { menuItem[props.id][index].title } </p>
                                    <p> { menuItem[props.id][index].price + " 원"} </p>
                                </div>
                            </div>
                        }
                    </div>

                    { index === menuIndex ? <MenuSelectModal show = { show } setShow = { setShow } clickNum = { clickNum } handleClose = { handleClose }
                                                             handleShow = { handleShow } count = { count } setCount = { setCount }
                                                             id = { props.id } menuImg = { menuImg } menuItem = { menuItem } pageCheck = { pageCheck }
                    /> : null}

                </>
            )
        })
    )
}

export default MenuDisplay;