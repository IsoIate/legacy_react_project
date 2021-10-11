import React from "react";
import {connect} from "react-redux";
import $ from 'jquery';
import '../../css/AdminPages/RightNav.css';

import americano from "../../img/coffee/americano.png";
import mediumCup from "../../img/mediumCup.png";
import iceDrink from "../../img/iceDrink.png";
import syrup from "../../img/syrup.png";
import takeAway from "../../img/takeAway.png";

import 아메리카노 from "../../img/coffee/americano.png";
import 카페라떼 from "../../img/coffee/cafelatte.png";
import 바닐라라떼 from "../../img/coffee/vanillalatte.png";
import 카페모카 from "../../img/coffee/cafemoca.png";
import 헤이즐넛 from "../../img/coffee/hazelnut.png";
import 카라멜마끼아또 from "../../img/coffee/caramelmacchiato.png";
import 티라미수라떼 from "../../img/coffee/tiramisulatte.png";

import 밀크티버블라떼 from "../../img/bubbleTea/milkTeaBubbleLatte.png";
import 흑당버블라떼 from "../../img/bubbleTea/blackSugarBubbleLatte.png";
import 달고나버블라떼 from "../../img/bubbleTea/dalgonaBubbleLatte.png";
import 흑당고구마라떼 from "../../img/bubbleTea/blackSugarSweetPotatoLatte.png";

import 자바칩프라푸치노 from "../../img/frappe/javaChipFrappe.png";
import 쿠앤크프라푸치노 from "../../img/frappe/cncFrappe.png";
import 민트초코프라푸치노 from "../../img/frappe/mintChocoFrappe.png";
import 딸기크림프라푸치노 from "../../img/frappe/strawberryCreamFrappe.png";
import 녹차프라푸치노 from "../../img/frappe/greenTeaFrappe.png";

import 플레인요거트 from "../../img/smoothie/plainYogurt.png";
import 딸기요거트 from "../../img/smoothie/strayberryYogurt.png";
import 블루베리요거트 from "../../img/smoothie/blueberryYogurt.png";
import 망고요거트 from "../../img/smoothie/mangoYogurt.png";
import 딸기바나나요거트 from "../../img/smoothie/strawberryBananaYogurt.png";
import 망고바나나요거트 from "../../img/smoothie/mangoBananaYogurt.png";
import 애플망고크러쉬 from "../../img/smoothie/appleMangoCrush.png";

import 자몽라임에이드 from "../../img/ade/grapefruitLimeAde.png";
import 청포도에이드 from "../../img/ade/greenGrapeAde.png";
import 레몬에이드 from "../../img/ade/lemonAde.png";
import 블루레몬에이드 from "../../img/ade/blueLemonAde.png";
import 유자에이드 from "../../img/ade/citronAde.png";
import 깔라만시에이드 from "../../img/ade/calamansiAde.png";

import 바나나주스 from "../../img/juice/bananaJuice.png";
import 토마토주스 from "../../img/juice/tomatoJuice.png";
import 키위주스 from "../../img/juice/kiwiJuice.png";

import 청귤차 from "../../img/tea/blueTangerineTea.png";
import 생강차 from "../../img/tea/gingerTea.png";
import 레몬차 from "../../img/tea/lemonTea.png";
import 자몽차 from "../../img/tea/grapefruiteTea.png";
import 유자차 from "../../img/tea/citronTea.png";
import 페퍼민트 from "../../img/tea/peppermintTea.png";
import 카모마일 from "../../img/tea/chamomileTea.png";

import 치즈케익 from "../../img/dessert/cheeseCake.png";
import 티라미수케익 from "../../img/dessert/tiramisuCake.png";
import 초코크림케익 from "../../img/dessert/chocomousseCake.png";
import 플레인크로플 from "../../img/dessert/plainCroffle.png";
import 아이스크림크로플 from "../../img/dessert/icecreamCroffle.png";
import 커피콩빵 from "../../img/dessert/coffeeBeanBread.png";
import 슈크림커피콩빵 from "../../img/dessert/custardCreamBread.png";

let coffee = [아메리카노, 카페라떼, 바닐라라떼, 카페모카, 헤이즐넛, 카라멜마끼아또, 티라미수라떼]
let bubbleTea = [밀크티버블라떼, 흑당버블라떼, 달고나버블라떼, 흑당고구마라떼]
let frappe = [자바칩프라푸치노, 쿠앤크프라푸치노, 민트초코프라푸치노, 딸기크림프라푸치노, 녹차프라푸치노]
let yogurt = [플레인요거트, 딸기요거트, 블루베리요거트, 망고요거트, 딸기바나나요거트, 망고바나나요거트, 애플망고크러쉬]
let ade = [자몽라임에이드, 청포도에이드, 레몬에이드, 블루레몬에이드, 유자에이드, 깔라만시에이드]
let juice = [바나나주스, 토마토주스, 키위주스]
let tea = [청귤차, 생강차, 레몬차, 자몽차, 유자차, 페퍼민트, 카모마일]
let dessert = [치즈케익, 티라미수케익, 초코크림케익, 플레인크로플, 아이스크림크로플, 커피콩빵, 슈크림커피콩빵]

let menu = [coffee, bubbleTea,frappe, yogurt, ade, juice, tea, dessert]

function RightNav(props) {
    let arr = [mediumCup, iceDrink, syrup, takeAway]
    let translate = 0;
    let result = null;

    return (
        <div className = "rightNav">
            {/* 왼쪽 이동버튼 */}
            <div className = "arrowDiv" onClick={() => {
                /* 이미지 개수 -1 만큼 14를 곱함 */
                if(translate >= -28 && translate < 0) {
                    translate = translate + 14;
                    $('.slide-container').css('transform', 'translateX(' + ( translate ) + 'vw)');
                }
            }}>
                <i className="fas fa-chevron-circle-left fa-2x"></i>
            </div>
            <div className = "payDetail">
                <div className = "detailMenuDiv">
                    <div className = "navHeaders">
                        <p> 주문메뉴 </p>
                    </div>
                    <div style={{ display : "flex", flexDirection : "column"}}>
                        <div style={{ display : "none" }}>
                            {
                                props.detailState[0] != null ?
                                    result = Temp( props.detailState, menu )
                                    : null
                            }
                        </div>
                        <div>
                            {
                                result == null
                                    ? <div className ={ 'slide-container'} style = {{ visibility : "hidden"}}>
                                        <div className = "slide-box">
                                            <img src={ result }/>
                                        </div>
                                      </div>
                                    : <div className = {'slide-container'} >
                                        <ImageSlide result = { result }/>
                                      </div>
                            }
                            { console.log(result) }
                            {
                                props.detailState[0] != null
                                    ? <p> { props.detailState[0][0].title } </p>
                                    : null
                            }
                        </div>
                    </div>
                </div>

                {/* 옵션 아이콘 */}
                <div className = "detailOptionDiv">
                    <div className = "navHeaders">
                        <p> 추가옵션 </p>
                    </div>
                    <div className = " optionColumn">
                        {
                            arr.map((num, index) => {
                                return (
                                    <div className = "col-md-6">
                                        <img className = "detailOptionImg" src = { arr[index] } />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className = "confirmDiv">
                    <button className = "btn btn-success confirmBtn"> 제조 완료 </button>
                </div>
            </div>

            {/* 오른쪽 이동버튼 */}
            <div className = "arrowDiv" onClick={() => {
                if(translate > -28  && translate <= 28) {
                    translate = translate - 14;
                    $('.slide-container').css('transform', 'translateX(' + ( translate ) + 'vw)');
                }
            }}>
                <i className="fas fa-chevron-circle-right fa-2x"></i>
            </div>
        </div>
    )
}

function ImageSlide(props) {
    let imageArray = props.result;

    return (
        imageArray.map((num, index) => {
                return (
                    <div className = "slide-box">
                        <img src = { props.result[index] } />
                    </div>
                )
            })

    )
}

function Temp(detailState, menu) {
    let coffeeInfo = ["아메리카노", "카페라떼", "바닐라라떼", "카페모카", "헤이즐넛", "카라멜마끼아또", "티라미수라떼"]
    let bubbleTeaInfo  = ['밀크티버블라떼', '흑당버블라떼', '달고나버블라떼', '흑당고구마라떼']
    let frappeInfo = ['자바칩프라푸치노', '쿠앤크프라푸치노', '민트초코프라푸치노', '딸기크림프라푸치노', '녹차프라푸치노']
    let yogurtInfo = ['플레인요거트', '딸기요거트', '블루베리요거트', '망고요거트', '딸기바나나요거트', '망고바나나요거트', '애플망고크러쉬']
    let adeInfo = ['자몽라임에이드', '청포도에이드', '레몬에이드', '블루레몬에이드', '유자에이드', '깔라만시에이드']
    let juiceInfo = ['바나나주스', '토마토주스', '키위주스']
    let teaInfo = ['청귤차', '생강차', '레몬차', '자몽차', '유자차', '페퍼민트', '카모마일']
    let dessertInfo = ['치즈케익', '티라미수케익', '초코크림케익', '플레인크로플', '아이스크림크로플', '커피콩빵', '슈크림커피콩빵']

    let menuInfo = [coffeeInfo, bubbleTeaInfo, frappeInfo, yogurtInfo, adeInfo, juiceInfo, teaInfo, dessertInfo];

    let tempIndex = parseInt(detailState[0][0].menuIndex);  // 메뉴 인덱스
    let detailArray = [];
    let titleArray = [];
    let imageArray = [];

    let temp = null;
    let result = null;

    console.log(detailState);

    if(detailState[0][tempIndex] != null) {
        console.log(detailState[0][tempIndex].title)  // 주문메뉴
    }

    for(let i = 0; i < detailState[0].length; i++) {
        detailArray.push(0);
    }

    detailArray.map((num, index) => {
        titleArray[index] = detailState[0][index].title;
        console.log(titleArray[index])
    })
    console.log("--------------")
    menuInfo.map((num, idx1) => {
        titleArray.map((num, idx2) => {
            if(menuInfo[tempIndex][idx1] == titleArray[idx2]) {
                imageArray.push(menu[tempIndex][idx1]);
            }
        })
    })

    return imageArray;
}

/* state를 props로 변환 */
function Conversion(state) {
    return {
        detailState : state.detailReducer
    }
}

export default connect(Conversion)(RightNav);
