import React from 'react';
import Nav from "./Nav";

function AdminPage() {
    return (
        <>
            <Nav/>
            <h2> admin page </h2>
            <div className="container mt-4">
                <form action="/login" method="post">
                    <div className="form-group">
                        <label> 아이디 </label>
                        <input type="text" className="form-control" name="id" autoComplete = "off" />
                    </div>
                    <div className="form-group">
                        <label> 비밀번호 </label>
                        <input type="password" className="form-control" name="pw" autoComplete = "off" />
                    </div>
                    <button type="submit" className="btn btn-outline-secondary"> 로그인 </button>
                </form>
            </div>
        </>
    )
}

export default AdminPage;