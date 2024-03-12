import { useState } from "react"

export default function Login({setLogedIn}){

    const [users, setUsers] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return(
        <>
        <h1>Logg inn...</h1>
        <form className="login" onClick={handleSubmit}> 
            <label htmlFor="username">Brukernavn</label>
            <input type="text" id="username" name="username" placeholder="Mart..." onChange={handleChange}></input>
            <label htmlFor="password">Passord</label>
            <input type="password" id="password" name="password" placeholder="*******" onChange={handleChange}></input>
            <button type="submit" onClick={() => setLogedIn(true)}>Logg inn</button>
        </form>
        </>
    )
}