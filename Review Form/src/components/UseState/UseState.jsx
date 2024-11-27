import { useEffect, useState } from "react";

const UseState = ()=>{
    // console.log(useState());
    const [count, setCount] = useState(0);
    // const [name, setName] = useState("Hello")

    const increment = () =>{
        setCount(count+1)
        // setName("Red & White")
        // console.log("Count ===> ", count);
    }

    useEffect(()=>{
        console.log('Every time render...');
    })
    useEffect(()=>{
        document.title = `${count} times Clicked`
    },[])
    return (
        <div>
            <h1>Hello, Red & White</h1>
            <h2>Count : {count}</h2>
            {/* <input type="text" value={name}/> */}
            <button onClick={increment}>Change</button>
        </div>
    )
}

export default UseState;