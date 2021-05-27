import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import '../../css/AdminModal.css';

function AdminModal(props) {
    let history = useHistory();
    let [password] = useState('1234');

    let [value, setValue] = useState('');

    return (
        <>
            <Modal show = { props.show } onHide = { props.onHide } >
                <Modal.Header>
                    <div className = "headerDiv">
                        <h2> 관리자 페이지 로그인 </h2>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <div className = "qrBody">
                        <input type = "password" value = { value } className = "pwInput" />
                    </div>
                    <div className="row btnDiv">
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 7);
                        }}> 7 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 8);
                        }}> 8 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 9);
                        }}> 9 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 4);
                        }}> 4 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 5);
                        }}> 5 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 6);
                        }}> 6 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 1);
                        }}> 1 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 2);
                        }}> 2 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 3);
                        }}> 3 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue('');
                        }}> CLR </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value + 0);
                        }}> 0 </button>
                        <button className="col-md-3 valueBtn" onClick={ () => {
                            setValue(value.substr(0, value.length - 1));
                        }}> ← </button>
                    </div>
                </Modal.Body>

                <Modal.Footer className = "loginFooter">
                    <Button variant="danger" onClick={() => {
                        props.onHide();
                    }}> 취소 </Button>

                    <Button variant="primary" onClick={() => {
                        return (
                            value === password ?
                                alert('관리자 페이지에 접속합니다.') + history.push('./AdminPage')
                                : alert('비밀번호가 틀렸습니다.'), setValue('')
                        )
                    }}> 로그인 </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminModal;