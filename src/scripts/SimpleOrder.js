import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import MenuBar from "./MenuBar";
import MenuDisplay from "./MenuDisplay";
import MenuPagingButtons from "./MenuPagingButtons";
import OrderTable from "./OrderTable";
import Payment from "./Payment";

function SimpleOrder() {

    let history = useHistory()
    let { id } = useParams();       /* 페이지 뒤에 붙는 숫자 */

    let [orderCount, orderCountChange] = useState(0);
    let [orderPrice, orderPriceChange] = useState(0);

    let [pageNum] = useState(1);

    return (
        <>
            <div>
                {/* 메뉴 바 모듈화 */}
                <MenuBar history = { history } />
            </div>
            {/* 메뉴 선택 버튼 모듈화 */}
            <div className="container-fluid ">
                <div className="row menuSelectDiv">
                    <MenuDisplay orderCountChange = { orderCountChange } orderPriceChange = { orderPriceChange }
                                 id = { id } history = { history } pageNum = { pageNum } />
                </div>
            </div>

            {/* 음료 이동 버튼 */}
            <MenuPagingButtons />

            {/* footer */}
            <div className="footer">
                {/* 주문내역 테이블 */}
                <OrderTable />

                {/* 주문정보 창 */}
                <Payment orderCount = { orderCount } orderPrice = { orderPrice } />
            </div>
        </>
    );
}

export default SimpleOrder