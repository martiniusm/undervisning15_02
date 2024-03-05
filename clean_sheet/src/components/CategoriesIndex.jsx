import { Link } from "react-router-dom"
import { useState } from "react"
export default function CategoriesIndex({content, setQuery, setCurrentId}){

    console.log( "Sjekk content", content)
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = (id) => {
        setCurrentId(id)
    }

    console.log("S", content)
    
    return(
    <>
        <h1>Characters</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for characters:</label>
            <input type="text" id="search" placeholder="Rickyyyy" onChange={handleChange}></input>
            <input type="submit" value="søk"></input>
        </form>
        <ul className="category-list">
            {content?.map(item => <li key={item.id}><Link to={item.name} onClick={()=>handleClick(item.id)}>{item.name}</Link></li>)}
        </ul>
    </>)
}