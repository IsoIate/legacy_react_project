import React, {useEffect, useState} from 'react'
import LeftNav from "./LeftNav";
import AdminNav from "./AdminNav";
import '../../css/AdminPages/Counter.css';
import { Button } from "react-bootstrap";
import axios from "axios";

function Counter() {

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
                    {/*<div className = "contentsBody">
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
                        <div className = "payDetail">
                            <div>
                                <div>
                                    카드 : 0원
                                    현금 : 0원
                                </div>
                                <div>
                                    확인
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    {
                        data != null ?
                            <MenuDetail data = { data } />
                            : null
                    }
                    {/*<div>
                        {
                            data != null ?
                                <TableBody data = { data } />
                                : null
                        }
                    </div>*/}
                </div>
            </div>
        </div>
    )
}


function MenuDetail(props) {
    let count = -1;
    let group = [];  // 11 222
    let groupCount = [];  //

    console.log(props.data)
    console.log(props.data.length)
    for(let i = 0; i < props.data.length; i++) {
        if(!group.includes(props.data[i].group)) {
            group.push(props.data[i].group)
            groupCount.push(1)
            count++
        }
        else groupCount[count] += 1
    }

    console.log(group)
    console.log(groupCount)

    let result = [];

    for(let i = 0; i < group.length; i++) {
        result.push(
            <div className = "divLeft">
                <div className = "groupCountBody">
                    <div> { group[i] } </div>
                </div>
            </div>
        )
        for(let j = 0; j < groupCount[i]; j++) {
            result.push(
                <div className = "divRight">
                    <div className = "contentsBody">
                        <div className = "contentsDiv">
                            <div className = "groupCount">
                                <div>  </div>
                            </div>
                            <div className = "menuDetail">
                                <div className = "md1"> { props.data[j].메뉴이름 } </div>
                                <div className = "md2"> { props.data[j].수량 } </div>
                                <div className = "md2"> { props.data[j].가격 } </div>
                                <div className = "md1"> 옵션 </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        result.push(
            <div className = "orderDiv">
                <div className = "orderDetail">
                    <div className = "payDetail">
                        <div>
                            현금 : 3000원
                        </div>
                        <div>
                            카드 : 0원
                        </div>
                    </div>
                    <div>
                        수량 : 2개
                    </div>
                    <div>
                        합계 : 150원
                    </div>
                </div>
                <div className = "confirmDiv">
                    <div>
                        확인
                    </div>
                </div>
            </div>
        )
    }

    return <div className = "divs"> { result } </div>;
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

function TableBody(props) {
    let count = -1;
    let group = [];  // 11 222
    let groupCount = [];  //

    console.log(props.data)
    console.log(props.data.length)
    for(let i = 0; i < props.data.length; i++) {
        if(!group.includes(props.data[i].group)) {
            group.push(props.data[i].group)
            groupCount.push(1)
            count++
        }
        else groupCount[count] += 1
    }

    console.log(group)
    console.log(groupCount)

    return (
        group.map((num, idx1) => {
            return (
                groupCount.map((num, idx2) => {
                    return (
                        <>
                            <div className = "contentsDiv">
                                <div className = "visCount" >
                                    { group[idx1] } 번</div>
                                <div> { props.data[idx2].메뉴이름 } </div>
                                <div> { props.data[idx2].수량 } </div>
                                <div> { props.data[idx2].가격 } </div>
                                <div> 옵션 </div>

                            </div>

                        </>
                    )
                })
            )
        })
    )
}

export default Counter;