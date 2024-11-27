import React, { useRef } from "react";

const ListComp = ({list}) => {
    const liRef =  useRef();
    const h2Ref =  useRef();

    const handelClick = () => {
        console.log(liRef.current);
        liRef.current.style.color = "Blue"
        h2Ref.current.style.color = "Yellow"
    }
    return (
        <>
            <h2 ref={h2Ref}>Static List</h2>
            <ul>
                <li ref={liRef} >{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
                <li>{list[4]}</li>
            </ul>
            <button onClick={handelClick}>Click</button>
        </>
    )
};

export default ListComp;