import { useEffect, useState } from "react"
import { fetchDog } from "./services"
import './app.css'

export function App() {
  const [dogs, setDogs] = useState()
  const [loading, setLoading] = useState(true)
  const [displayImage, setDisplayImage] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDog()
      setDogs(response.message)
      setLoading(false)
    }
    fetchData()
  }, [dogs])
  
  if (loading || !dogs) {
    return (
      <h1>Loading...</h1>
    )
  }
const handleClick = () => {
  setDisplayImage(dogs)
}
  return (
    <div>
      <h1>Gerador de Doguinhos Fofinhos</h1>
      <img src={displayImage} alt="" />
      <button onClick={handleClick}>Gerar Dog FOFO</button>
    </div>
  )
}
