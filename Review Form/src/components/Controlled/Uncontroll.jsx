import { useRef } from "react";


const UnControll = () =>{
    const Username = useRef(null);
    const Rating  = useRef(null);

    const handelSubmit =  (e) =>{
        e.preventDefault();
        console.log('Click')
        console.log('Full Name: ==> ', Username.current.value)
        console.log('Rating : ==> ', Rating .current.value)

        Username.current.value  = ""
        Rating .current.value  = ""
    }
    return (
        <>
            <h1>UnControll Component</h1>
            <form onSubmit={(e)=>handelSubmit(e)}>
                <label>Name: </label>
                <input type="text" name="fulReview" ref={Username}  /><br/>
                <label>Rating : </label>
                <input type="text" name="Rating "  ref={Rating } /><br/>
                <button type="submit"> Submit</button>
            </form>
        </>
    )
}

export default UnControll;