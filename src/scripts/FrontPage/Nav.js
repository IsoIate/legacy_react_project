import React from 'react';

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"> Todo App </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/write">Write</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/list">List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mypage">마이페이지</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">로그인</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">회원가입</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Nav;
