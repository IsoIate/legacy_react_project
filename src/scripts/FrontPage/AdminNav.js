import React from 'react';

function AdminNav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"> ABC Cafe </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/AdminPage"> 홈 </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AdminPage"> 게시판 </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AdminPage"> 매출정보 </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AdminPage"> 설정 </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default AdminNav;
