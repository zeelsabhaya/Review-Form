import { useState } from "react";

const MultiControll = () => {
    const initialvalue = {
        Username: "",
        Review: "",
        Rating: "",
    }
    const [form, setForm] = useState(initialvalue);
    const [error, seterror] = useState({});

    const inputHandel = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const validation = () => {
        let formerror = {};
        if (form.Username === "") {
            formerror.Username = " * Username is Required"
        }
        if (form.Review === "") {
            formerror.Review = "* Review is Required."
        }
        if (form.Rating === "") {
            formerror.Rating = "* Rating  is Required."
        }
        seterror(formerror);
        if (Object.keys(formerror).length > 0) {
            return false;
        } else {
            return true;
        }

    }
    const handelSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            console.log('Form Submit')
            console.log("Form Input ===> ", form);
            setForm(initialvalue);
        } else {
            console.log('Form is not Submited')
        }

    }
    return (
        <>
            <h1>Review Form</h1>
            <div className="form">
                <form onSubmit={(e) => handelSubmit(e)}>
                    <label>Username :- </label>
                    <input type="text" name="Username" value={form.Username} onChange={inputHandel} style={{ borderColor: error.Username ? 'Red' : '' }}
                    />
                    {error.Username ? <i style={{ color: 'Red' }}>{error.Username}</i> : ''}
                    <br />
                    <label className="Rating">Rating :- </label>
                    <input type="text" name="Rating" value={form.Rating} onChange={inputHandel} style={{ borderColor: error.Username ? 'Red' : '' }} />
                    {error.Rating ? <i style={{ color: 'Red' }}>{error.Rating}</i> : ''}
                    <br />
                    <p>Enter User Review Text :- </p>
                    <textarea rows="2" cols="30" name="Review" form="usrform" value={form.Review} onChange={inputHandel} style={{ borderColor: error.Username ? 'Red' : '' }}></textarea>
                    {error.Review ? <i style={{ color: 'Red' }}>{error.Review}</i> : ''}
                    <br />
                    <button type="submit"> Submit</button>
                </form>
            </div>
        </>
    )
}

export default MultiControll;