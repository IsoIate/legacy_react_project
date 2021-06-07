import React, {useEffect, useState} from 'react'
import axios from "axios";
import RevenueTable from "./RevenueTable";

function GetData() {
    let [data, setData] = useState(null);

    /* getRevenue라는 url로 접속했을 때 아래 코드 실행 */
    useEffect(() => {

        console.log("click");
        axios.get('/getRevenue')

            .then(( res ) => {
                setData(res.data.comp)
                console.log(res.data.comp)
            })
            .catch(( error )=>{ console.log( error ) })

    }, [])

    return(
        <>
            <RevenueTable data = { data } />
        </>
    )
}

export default GetData;