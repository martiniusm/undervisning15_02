import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [food, setFood] = useState("")
  const apiKey = process.env.REACT_APP_API_KEY
  
  const getFood = async () => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=italian`)
    .then(response => response.json())
    .then(data => setFood(data.results))
    .catch(error => error.log(error))
  }

  useEffect(() => {
    getFood()
  }, [])

  console.log(food)

  return (
    <>
      <h1>Hello cuh</h1>
    </>
  )
}

export default App
