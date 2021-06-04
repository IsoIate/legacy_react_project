import React, {useState} from 'react';
import {Nav, Button} from "react-bootstrap";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import '../../css/Order/MenuBar.css'

// 메뉴 바 모듈
function MenuBar(props) {

    let menu = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트'];
    let [menuState] = useState(false);
    let [search, setSearch] = useState("");

    return (
        <div className="menuContainer">
            <div className = "storeBanner">
                <div className="homeBtn">
                    <p className="cursorAble" onClick={() => {
                        props.history.push("/")
                    }}><i className="fas fa-home fa-2x"></i>  처음으로</p>
                </div>

                {/*<div className = "searchMenu">
                    <h2> 메뉴 검색 </h2>
                    <input onChange = {(e) => { setSearch(e.target.value) } }/>
                    <Button> 검색 </Button>
                </div>*/}
            </div>
            <div className = "storeTitle">
                <h1> ABC Cafe </h1>
            </div>
            <div className = "menuTitle" >      {/* 메뉴 선택 버튼 */}

                <Nav justify variant="pills"  defaultActiveKey="/home">
                    <Nav.Link className="cursorDisable" style={{paddingBottom: "0px"}}>
                        <LeftArrow menuState = { menuState } history = { props.history } />   {/* 메뉴 왼쪽 이동 버튼 */}
                    </Nav.Link>
                </Nav>

                <Menu menu = { menu } history = { props.history }  />     {/* 메뉴 버튼 */}

                <Nav justify variant="pills"  defaultActiveKey="/home">
                    <Nav.Link style={{paddingBottom: "0px"}}>
                        <RightArrow menuState = { menuState } history = { props.history }/>
                    </Nav.Link>
                </Nav>

            </div>
        </div>
    )
}

function Menu(props) {

    return (
        props.menu.map(function (num, index) {
            return (
                <Nav justify variant="pills" className="menuSelect" defaultActiveKey="/home">
                    <Nav.Link style={{paddingBottom: "0px"}} onClick={ () => {
                        props.history.push("./" + index)
                    }}>
                        <p className = "menu" > { props.menu[index] } </p>
                    </Nav.Link>
                </Nav>
            )
        })
    )
}

export default MenuBar;