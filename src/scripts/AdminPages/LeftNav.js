import React from 'react'
import '../../css/AdminPages/LeftNav.css'

function LeftNav() {

    let titleLink = ['/AdminPage', '/AdminPage/Revenue', '/AdminPage/Counter', '/AdminPage/Setting'];
    let btnClassName = ["fas fa-home", "fas fa-cash-register", "fas fa-shopping-cart", "fas fa-cogs"];
    let tooltip = ['Home', 'Sales', 'Counter', 'Setting']

    return (
        <div className = "leftNav">

            <div className = "btnDivs">
                <button type="button" className="btn btn-default btn-lg" aria-label="Left Align">
                    <i style={{color: "white", fontSize: "30px"}}
                       className = "fas fa-bars"></i>
                </button>
                <hr style = {{ border : "1px solid white"}}/>
                {
                    btnClassName.map((num, index) => {
                        return (
                            <button type="button" tooltip-text = { tooltip[index] }
                                    className="btn btn-default btn-lg" >
                                <a href = { titleLink[index] } >
                                    <i style={{color: "white", fontSize: "24px"}}
                                       className = { btnClassName[index] } ></i>
                                </a>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LeftNav;