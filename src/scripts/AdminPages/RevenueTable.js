import React, {useEffect, useState} from 'react'

function RevenueTable(props) {

    let [idToggle, setIdToggle] = useState(false);
    let [menuToggle, setMenuToggle] = useState(false);
    let [price, setPrice] = useState([]);

    return (
        <>
            { console.log(props.data) }
            <div className="card" style = {{ width: "100%" }}>
                <table className="table table-striped table-bordered revenueTable ">
                    <tr className = "tableHeader" >
                        <th onClick = {() => {
                            idToggle == false && setIdToggle(true)
                            idToggle == true && setIdToggle(false)
                        }}> # </th>
                        <th> 메뉴명 </th>
                        <th> 수량 </th>
                        <th> 가격 </th>
                    </tr>
                    {
                        props.data != null ?
                            idToggle == false ?
                                <Primary data = { props.data } />
                                : <Reverse data = { props.data } />
                            : null
                        /*menuToggle == false ?
                        <Primary data = { data } />
                        : <MenuSort data = { data } />*/
                    }
                </table>
            </div>
        </>
    )
}

function Primary (props) {
    return (
        props.data.map((num, index) => {
            return (
                <>
                    <tr className = "tableBody">
                        <td>
                            { props.data[index]._id }
                        </td>
                        <td>
                            { props.data[index].메뉴이름 }
                        </td>
                        <td>
                            { props.data[index].수량 }
                        </td>
                        <td>
                            { props.data[index].가격 }
                        </td>
                    </tr>
                </>
            )
        })
    )
}

function Reverse (props) {
    return (
        props.data.reverse().map((num, index) => {
            return (
                <>
                    <tr className = "tableBody">
                        <td>
                            { props.data[index]._id }
                        </td>
                        <td>
                            { props.data[index].메뉴이름 }
                        </td>
                        <td>
                            { props.data[index].수량 }
                        </td>
                        <td>
                            { props.data[index].가격 }
                        </td>
                    </tr>
                </>
            )
        })
    )
}

export default RevenueTable;