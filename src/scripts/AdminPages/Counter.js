import React, {useEffect, useState} from 'react'
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Counter.css';
import { Button } from "react-bootstrap";
import axios from "axios";
import {connect} from "react-redux";

function Counter(props) {

    let [data, setData] = useState(null);
    let groupNum = [];
    let count = -1;
    let arr1 = [];  // 11 222
    let arr2 = [];  //

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
    let indexArr = [];
    let totalRes = 0;
    let totalCnt = 0;


    for(let i = 0; i < props.data.length; i++) {
        if(!group.includes(props.data[i].group)) {
            group.push(props.data[i].group)
            groupCount.push(1)
            count++
        }
        else groupCount[count] += 1
    }

    for (let i = 0; i < groupCount.length; i++) {
        arr[i] = new Array(groupCount[i]).fill(1);
    }

    props.data.map((num, index) => {
        return (
            indexArr.push(props.data[index]._id)
        )
    })

    console.log(indexArr)

    return (
        group.map((num, index) => {
            totalCnt = 0
            totalRes = 0
            return (
                <>
                    <div className = "divLeft">
                        <div className = "groupCountBody">
                            <div> { group[index] } </div>
                        </div>
                    </div>
                    {/*<Receipt  arr = { arr } data = { props.data } index = { index } indexArr = { indexArr }
                    setTotalRes = { setTotalRes } setTotalCnt = { setTotalCnt } />*/}
                    {
                        arr[index].map((num, idx2) => {
                            totalCnt += props.data[idx2].수량
                            totalRes += props.data[idx2].가격
                            return (
                                <div className = "divRight">
                                    <div className = "contentsBody">
                                        <div className = "contentsDiv">
                                            <div className = "groupCount">
                                                <div>  </div>
                                            </div>
                                            <div className = "menuDetail">
                                                <div className = "md1"> { props.data[idx2].메뉴이름 } </div>
                                                <div className = "md2"> { props.data[idx2].수량 } </div>
                                                <div className = "md2"> { props.data[idx2].가격 } </div>
                                                <div className = "md1"> 옵션 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className = "orderDiv">
                        <div className = "orderDetail">
                            <div className = "payDetail">
                                {console.log(totalRes, totalCnt)}
                                {
                                    props.data[index].payment == 0 ?
                                        <div>
                                            현금 : { totalRes } 원
                                        </div>
                                        :
                                        <div>
                                            카드 : { totalRes } 원
                                        </div>
                                }
                            </div>
                            <div>
                                수량 : { totalCnt } 개
                            </div>
                            <div>
                                합계 : { totalRes } 원
                            </div>
                        </div>
                        <div className = "confirmDiv">
                            <Button onClick = { () => {

                            }}>
                                확인
                            </Button>
                        </div>
                    </div>
                </>
            )
        })
    )
}

function Receipt(props) {

    return (
        props.arr[props.index].map((num, idx2) => {
            return (
                <div className = "divRight">
                    <div className = "contentsBody">
                        <div className = "contentsDiv">
                            <div className = "groupCount">
                                <div>  </div>
                            </div>
                            <div className = "menuDetail">
                                <div className = "md1"> { props.data[idx2].메뉴이름 } </div>
                                <div className = "md2"> { props.data[idx2].수량 } </div>
                                <div className = "md2"> { props.data[idx2].가격 } </div>
                                <div className = "md1"> 옵션 </div>
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