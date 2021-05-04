import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom'

import '../css/Order.css';

import MenuContainer from "./MenuContainer";
import MenuDisplay from "./MenuDisplay";
import MenuPagingButtons from "./MenuPagingButtons";
import OrderTable from "./OrderTable";
import Payment from "./Payment";

function Order() {
    let menu = ['커피', '버블티', '프라페', '스무디', '에이드', '주스', '차', '디저트'];

    let history = useHistory();
    let { id } = useParams();       /* 페이지 뒤에 붙는 숫자 */

    let [menuState] = useState(false);
    let [orderCount, orderCountChange] = useState(0);
    let [orderPrice, orderPriceChange] = useState(0);

    return (
        <div className = "order">
            <div className="body">
                {/* 메뉴 바 모듈화 */}
                <MenuContainer menuState = { menuState } menu = { menu } history = { history } />

                {/* 메뉴 선택 버튼 모듈화 */}
                <div className="container-fluid ">
                    <div className="row menuSelectDiv">
                        <MenuDisplay orderCountChange = { orderCountChange } orderPriceChange = { orderPriceChange }
                                     id = { id } history = { history } />
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
                <Payment orderCount = { orderCount } orderPrice = { orderPrice } />
            </div>
        </div>
    )
}

export default Order