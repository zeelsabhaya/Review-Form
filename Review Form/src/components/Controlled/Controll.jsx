import { useState } from "react";

const Controll = () =>{
    const [Username, setUsername] = useState("");
    const [Rating , setRating ] = useState("");
    // state using handel react
    const handeReview = (e)=>{
        setUsername(e.target.value);
       
    }
    const handelRating  = (e)=>{
        setRating (e.target.value);
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log('fulReview: => ', Username);
        console.log('Rating : => ', Rating );
        setRating ("")
        setUsername("")
    }
    return (
        <>
            <h1>Controll Components</h1>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <label>Name: </label>
                <input type="text" name="fulReview" value={Username} onChange={handeReview} /><br/>
                <label>Rating : </label>
                <input type="text" name="Rating " value={Rating } onChange={handelRating } /><br/>
                <button type="submit"> Submit</button>
            </form>
        </>
    )
}

export default Controll;