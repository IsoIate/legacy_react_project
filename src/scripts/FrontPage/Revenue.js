import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Revenue() {

    var [value, setValue] = useState(null);
    useEffect(() => {

        console.log("click");
        axios.get('/getRevenue')
            .then(( res ) => {
                /*console.log( res.request.responseText )*/
                console.log( res.data )
                setValue( res.data )

            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    return (
        <>
            <div className="container mt-3">
                <h4 className="text-center">매출정보 페이지 입니다.</h4>
                <div className="card" style = {{ width: "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">
                            title
                            {
                                console.log(value)
                            }
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            count
                        </h6>
                        <h6 className="card-subtitle mb-2 text-muted">
                            price
                        </h6>
                        <p className="card-text">임시내용입니다.</p>
                        <button className="btn btn-primary" onClick={() => {
                            axios.get('/AdminPage/Revenue')
                                .then(( result )=>{ console.log( result ) })
                                .catch(( error )=>{ console.log( error ) });
                                console.log("click");
                        }}>더보기</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Revenue;