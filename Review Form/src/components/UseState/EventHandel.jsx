import { useState } from "react"
import "./EventHandel.css";

const Eventhandel = () =>{
    const [name, setName] = useState("Virat");
    const [isValid, setIsValid] = useState(true);
    const handelBlur = () => {
        console.log('Blur Event Called....');
    }
    // const handelChange = (event) =>{
    //     // console.log(event.target.value)
    //     setName(event.target.value)
    // }

    const handelClick  = (name) =>{
            setName(`${name} ViraT`)
            setIsValid((valid) => !valid)
    }

    return (
        <div className={isValid ? 'lightTheme' : 'darkTheme' }>
            {/* <input type="text" value={name} onChange={(e)=>handelChange(e)} onBlur={handelBlur} required/> */}
            <h3>Hello Guys</h3>
            <button onClick={()=>handelClick('Anushka')} >{isValid ? "Convert Dark Mode" : "Convert Light Mode"}</button>
        </div>
    )
}

export default Eventhandel;