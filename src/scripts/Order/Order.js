import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom'

import '../../css/Order.css';

import MenuBar from "./MenuBar";
import MenuDisplay from "./MenuDisplay";
import MenuPagingButtons from "./MenuPagingButtons";
import OrderTable from "./OrderTable";
import Payment from "./Payment";

function Order() {


    let history = useHistory();
    let { id } = useParams();       /* 페이지 뒤에 붙는 숫자 */

    let [pageNum] = useState(0);

    return (
        <div className = "order">
            <div className="body">
                {/* 메뉴 바 모듈화 */}
                <MenuBar history = { history } />

                {/* 메뉴 선택 버튼 모듈화 */}
                <div className="container-fluid ">
                    <div className="row menuSelectDiv">
                        <MenuDisplay id = { id } history = { history } pageNum = { pageNum }/>

                    </div>
                </div>

                {/* 음료 이동 버튼 */}
                <MenuPagingButtons />
            </div>

            {/* footer */}
            <div className="footer">
                {/* 주문내역 테이블 */}
                <OrderTable />

                {/* 주문정보 창 */}
                <Payment />
            </div>
        </div>
    )
}

export default Order