import React, {useEffect, useState} from 'react'
import axios from "axios";

function GetPrice() {
    let [data, setData] = useState(null);

    /* getRevenue라는 url로 접속했을 때 아래 코드 실행 */
    useEffect(() => {

        console.log("click");
        axios.get('/getPrice')

            .then(( res ) => {
                setData(res.data.comp)

            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    return(
        <>
            <RevenueTable data = { data } />
        </>
    )
}

export default GetPrice;