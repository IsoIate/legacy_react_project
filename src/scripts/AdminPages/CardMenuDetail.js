import {Button} from "react-bootstrap";
import React from "react";

function CardMenuDetail(props) {
    return (
        <>
            <div className = "menuDiv">
                {/* 손님 그룹 Number */}
                <div>
                    <div className = "contentsDiv">

                        <div className = "groupCount">
                            <div> { 1 } </div>
                        </div>

                        <div className = "menuDetail">
                            <div className = "md1">   </div>
                            <div className = "md2">   </div>
                            <div className = "md2">   </div>
                            <div className = "md1">   </div>
                        </div>
                    </div>
                </div>

                {
                    props.req.map((num, index) => {
                        return (
                            <div className = "contentsDiv">
                                <div className = "groupCount">
                                    <div>  </div>
                                </div>
                                <div className = "menuDetail">
                                    <div className = "md1"> { props.req[index].title } </div>
                                    <div className = "md2"> { props.req[index].count } </div>
                                    <div className = "md2"> { props.req[index].price } </div>
                                    <div className = "md1"> { props.req[index].options } </div>
                                </div>
                            </div>
                        )
                    })
                }


                {/* 주문확인 및 버튼 */}
                <div className = "orderDiv">
                    <div className = "contentsDiv">
                        <div className = "groupCount">
                            <div>  </div>
                        </div>
                        <div className = "menuDetail">
                            <div className = "md1">
                                <div className = "payDivs">
                                    <p> 현금 : { 0 } 원 </p>
                                    <p> 카드 : { props.card[1] } 원 </p>
                                </div>
                            </div>
                            <div className = "md2">
                                <p> 수량 : { props.card[0] } 개 </p>
                            </div>
                            <div className = "md2">
                                <p> 합계 : { props.card[1] } 원 </p>
                            </div>
                            <div className = "md1">
                                <Button className = "submitBtn" onClick = { () => {

                                }}>
                                    자세히
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMenuDetail;