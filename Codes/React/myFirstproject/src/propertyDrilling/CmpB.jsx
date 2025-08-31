import { useState } from "react";
import CmpC from "./CmpC";

function CmpB(props){
    const [inputValue, setInputValue] = useState("");
    const [name, setName] = useState(props.name || "");

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={() => setName(inputValue)}>Show</button>
            <CmpC name={name}/>
        </>
    );
}

export default CmpB;