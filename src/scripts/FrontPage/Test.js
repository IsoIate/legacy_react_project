import React from 'react'

function Test() {
    return (
        <>
            <form action = "/test" method = "post">
                <input type = "text"  name = "id" value = ""/>
                <input type = "text"  name = "pw"/>
                <input type = "text"  name = "date"/>
                <button type = "submit"> submit </button>
            </form>
        </>
    )
}

export default Test;