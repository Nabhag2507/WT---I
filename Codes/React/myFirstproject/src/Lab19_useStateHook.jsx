import React, { useState } from 'react'

function Lab19_useStateHook() {
    const [count , setCount] = useState(0);
    return (
        <>
            <div>counter  = {count}</div>
            <button onClick={()=>{
                setCount(count+1);
            }} className="btn btn-primary me-5">Increase</button>

            <button onClick={()=>{
                setCount(count-1);
            }} className="btn btn-primary">Decrease</button>
        </>
    )
}

export default Lab19_useStateHook