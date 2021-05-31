import React from 'react'
import axios from 'axios'

function Revenue() {
    return (
        <>
            <div className="container mt-3">
                <h4 className="text-center">매출정보 페이지 입니다.</h4>
                <div className="card" style = {{ width: "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">
                            title
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            count
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            price
                        </h6>
                        <p className="card-text">임시내용입니다.</p>
                        <a href="#" className="card-link">수정하기</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Revenue;