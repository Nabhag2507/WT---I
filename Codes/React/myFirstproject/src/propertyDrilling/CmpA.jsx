import CmpB from "./CmpB";

function CmpA(props){
    return (
        <>
            <CmpB name={props.name}/>
        </>
    );
}

export default CmpA;