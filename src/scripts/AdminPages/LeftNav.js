import React from 'react'
import drink from "../../img/drink.png";
import '../../css/AdminPages/LeftNav.css'

function LeftNav() {

    let title = ['홈', '최근매출', '매출현황', '설정'];
    let titleLink = ['/AdminPage', '', '/AdminPage/Revenue', ''];

    return (
        <>
            <div className = "leftDiv">
                <div className = "banner">
                    <h2> ABC Cafe </h2>
                </div>
                <div className = "navBar">
                    {
                        title.map(function (num, index) {
                            return (
                                <div className = "navBtn">
                                    <img className = "navImg" src = { drink } />

                                    <a href = { titleLink[index] } > { title[index] } </a>
                                    { console.log( )}
                                    <span className = "arrowIcon">
                                            <i className="fas fa-angle-right fa-2x"></i>
                                        </span>

                                    {/*<span className = "navTitle">

                                        </span>
                                        */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LeftNav;