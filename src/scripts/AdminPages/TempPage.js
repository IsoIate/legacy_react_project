import React, {useEffect, useState} from 'react'
import '../../css/AdminPages/TempPage.css'


function TempPage () {
    return (
        <div className = "pageContainer">
            <div className = "leftNav">
                1
            </div>
            <div className = "rightContents">
                <div className = "topNav">
                    2
                </div>
                <div className = "body">
                    <div className = "leftContainer">
                        <div className = "payDiv">
                            <div className = "payDivTop">
                                <p> # </p>
                                <p> 메뉴명 </p>
                                <p> 수량 </p>
                                <p> 가격 </p>
                                <p> 옵션 </p>
                            </div>
                            <div> Body </div>
                            <div> Body </div>
                            <div> Body </div>
                        </div>
                    </div>
                    <div className = "rightContainer">
                        <div className = "payDeTail">
                            <div> Top </div>
                            <div> Body </div>
                            <div> Body </div>
                            <div> Body </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TempPage;