import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  const [logedIn, setLogedIn] = useState(false)
  const [food, setFood] = useState("")
  const apiKey = process.env.REACT_APP_API_KEY

  const [users, setUsers] = useState( ()=> {
    const data = localStorage.getItem("users")
    const userdata = JSON.parse(data)
    return userdata || ""
  })

  console.log(users)

  /*const databaseUsers = [
    {
      username: "Rød_Ræv69",
      password: "1234"
    },
    {
      username: "Blå_Bjørn69",
      password: "1234"
    }
  ]

  localStorage.setItem("users", JSON.stringify(databaseUsers))*/

  const getFood = async() =>{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}d&cuisine=italian`)
    .then(response => response.json())
    .then(data => setFood(data.results))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    getFood()
  },[])

  console.log(food)

  return (
    <>
      <Layout logedIn={logedIn}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login setLogedIn={setLogedIn} />} />
        </Routes>
      </Layout>
      {!logedIn ? <Navigate to="login" replace /> : <Navigate to="/" replace />}
    </>
  )
}

export default App
