import React, { useEffect, useState } from 'react'

function UseEffectdemo() {
    const [seccount , setSeccount] = useState(0);
    useEffect(()=>{
        setTimeout(() => { setSeccount( seccount+1 ); }, 1000);
    },[seccount]);

    return (
        <>
            <h1>count : {seccount}</h1>
        </>
    )
}

export default UseEffectdemo