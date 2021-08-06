import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scripts/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js"
import { Provider } from 'react-redux'
import {combineReducers, createStore} from 'redux'
import { positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

/* defaultParameter */
let primaryState = [];
let orderState = [0, 0];
let optionState = [0, 0, 0, 0];
let counterState = [];

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
};

/* 주문 표 생성, 제거 */
function reducer(state = primaryState, action) {
    if(action.type === "항목추가") {
        let copy = [...state];

        if(copy[0] != null) {
            copy.map((num, index) => {
                return (

                    ((copy[index].title).includes(action.payload.title)) ?
                        console.log(copy) +
                        console.log(copy[index].title) +
                        console.log(action.payload.title) +
                        console.log(index) +
                        console.log("num") +
                        console.log(copy.length) +
                        console.log(action.payload.temp) +
                        (copy[index].count = copy[index].count + action.payload.count) +
                        (copy[index].price = copy[index].price + action.payload.price)
                        : (index + 1) == copy.length && (!(copy[index].title).includes(action.payload.title)) ?
                        copy.push(action.payload) + console.log("push")
                        : null


                )
            })

        }
        else if(copy[0] == null) {
            copy.push(action.payload)
        }

        return copy;
    }
    else if (action.type === "항목제거") {
        let copy = [...state];
        let temp = action.payload;
        copy.splice(temp, 1);
        return copy;
    }
    else {
        return state
    }

}

/* 결제 내용 계산기 */
function orderReducer(state = orderState, action) {
    if(action.type === "주문추가") {
        let copy = [...state];

        copy[0] += action.payload.count;
        copy[1] += action.payload.price;
        return copy;
    }
    else if (action.type === "주문제거") {
        let copy = [...state];
        let tempCount = action.payload.count;
        let tempPrice = action.payload.price;

        copy[0] -= tempCount;
        copy[1] -= tempPrice;
        return copy;
    }
    else {
        return state
    }

}

/* 옵션 설정, 초기화 */
function optionReducer(state = optionState, action) {
    if (action.type === "사이즈변경") {
        let copy = [...state];
        copy[0] = action.payload;
        return copy;
    }
    else if (action.type === "얼음변경") {
        let copy = [...state];
        copy[1] = action.payload;
        return copy;
    }
    else if (action.type === "시럽변경") {
        let copy = [...state];
        copy[2] = action.payload;
        return copy;
    }
    else if (action.type === "포장변경") {
        let copy = [...state];
        copy[3] = action.payload;
        return copy;
    }
    else if (action.type === "사이즈초기화") {
        let copy = [...state];
        copy[0] = 1;
        return copy;
    }
    else if (action.type === "얼음초기화") {
        let copy = [...state];
        copy[1] = 1;
        return copy;
    }
    else if (action.type === "시럽초기화") {
        let copy = [...state];
        copy[2] = 1;
        return copy;
    }
    else if (action.type === "포장초기화") {
        let copy = [...state];
        copy[3] = 1;
        return copy;
    }
    else {
        return state
    }
}

let store = createStore(combineReducers({ reducer, orderReducer, optionReducer }));

/* 주문 메뉴 카운터로 전송 */
function counterReducer(state = counterState, action) {

}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store = { store } template={AlertTemplate} {...options}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
