import React, {useEffect, useState} from 'react'
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Counter.css';
import { Button } from "react-bootstrap";
import axios from "axios";
import {connect} from "react-redux";

let globalSum = -1;

function Counter(props) {

    let [data, setData] = useState(null);

    /* getCounter라는 url로 접속했을 때 아래 코드 실행 */
    useEffect(() => {

        axios.get('/getCounter')

            .then(( res ) => {
                setData(res.data.comp)
                /*console.log(res.data.comp)*/
            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    return (
        <div className = "counterDiv">
            <LeftNav/>

            <div className="container mt-3" className = "rightDiv">
                <AdminNav/>

                <div className = 'container-fluid bodyContents'>
                    <div className = "contentsHeader">
                        <div className = "contentsDiv">
                            <div className = "groupCount">
                                <div> # </div>
                            </div>
                            <div className = "menuDetail">
                                <div className = "md1"> 메뉴명 </div>
                                <div className = "md2"> 수량 </div>
                                <div className = "md2"> 가격 </div>
                                <div className = "md1"> 옵션 </div>
                            </div>
                        </div>
                    </div>
                    {
                        data != null ?
                            <MenuDetail data = { data } />
                            : null
                    }
                </div>
            </div>
        </div>
    )
}


function MenuDetail(props) {
    let count = -1;
    let group = [];  // 11 222
    let groupCount = [];  //
    let arr = new Array(group.length);

    for(let i = 0; i < props.data.length; i++) {
        if(!group.includes(props.data[i].group)) {
            group.push(props.data[i].group)
            groupCount.push(1)
            count++
        }
        else groupCount[count] += 1
    }

    /* groupCount를 배열화 시킨 것 */
    for (let i = 0; i < groupCount.length; i++) {
        arr[i] = new Array(groupCount[i]).fill(i + 1);
    }

    console.log(props.data)

    return (
        group.map((num1, index) => {
            let totalCnt = 0
            let totalRes = 0
            return (
                <div className = "menuDiv">
                    {/* 손님 그룹 Number */}
                    <div>
                        <div className = "contentsDiv">

                                <div className = "groupCount">
                                    <div> { group[index] } </div>
                                </div>

                                <div className = "menuDetail">
                                    <div className = "md1">   </div>
                                    <div className = "md2">   </div>
                                    <div className = "md2">   </div>
                                    <div className = "md1">   </div>
                                </div>
                        </div>
                    </div>

                    {/* 손님 그룹별 주문내역 */}
                    {
                        arr[index].map((num2, idx2) => {
                            globalSum++

                            totalCnt += props.data[globalSum].수량
                            totalRes += props.data[globalSum].가격
                            return (
                                <div className = "contentsDiv">
                                    <div className = "groupCount">
                                        <div>  </div>
                                    </div>
                                    <div className = "menuDetail">
                                        <div className = "md1"> { props.data[globalSum].메뉴이름 } </div>
                                        <div className = "md2"> { props.data[globalSum].수량 } </div>
                                        <div className = "md2"> { props.data[globalSum].가격 } </div>
                                        <div className = "md1"> 옵션 </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* 주문확인 및 버튼튼 */}
                   <div className = "orderDiv">
                       <div className = "contentsDiv">
                           <div className = "groupCount">
                               <div>  </div>
                           </div>
                           <div className = "menuDetail">
                               <div className = "md1">
                                   {
                                       props.data[index].지불 === 0 ?
                                           <div className = "payDivs">
                                               <p> 현금 : { totalRes } 원 </p>
                                               <p> 카드 : { 0 } 원 </p>
                                           </div>
                                           :
                                           <div className = "payDivs">
                                               <p> 현금 : { 0 } 원 </p>
                                               <p> 카드 : { totalRes } 원 </p>
                                           </div>
                                   }
                               </div>
                               <div className = "md2">
                                   <p> 수량 : { totalCnt } 개 </p>
                               </div>
                               <div className = "md2">
                                   <p> 합계 : { totalRes } 원 </p>
                               </div>
                               <div className = "md1">
                                   <Button className = "submitBtn" onClick = { () => {
                                       console.log(index)
                                       console.log(globalSum)
                                   }}>
                                       확인
                                   </Button>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            )
        })
    )
}

function SubmitBtn(props) {
    return (
        props.data.map((num, index) => {
            return (
                <tr>
                    <td colSpan={3}> 제조완료</td>
                    <td>
                        <form action='/makeComp' method="post">
                            <div style={{display: "none"}}>
                                <input type="text" value={props.data[index]._id}
                                       name="_id"/>
                                <input type="text" value={props.data[index].메뉴이름}
                                       name="title"/>
                                <input type="text" value={props.data[index].수량}
                                       name="count"/>
                                <input type="text" value={props.data[index].가격}
                                       name="price"/>
                            </div>
                            <button type="submit" className="submitBtn"> 확인</button>
                        </form>
                    </td>
                </tr>
            )
        })
    )
}

/* state를 props로 변환 */
function Conversion(state) {
    return {
        receiptState : state.receiptReducer,
        counterConfirmState : state.counterConfirmReducer
    }
}

export default connect(Conversion)(Counter);