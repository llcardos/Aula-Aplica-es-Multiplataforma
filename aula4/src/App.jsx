import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const url = "https://api.serratec.mwmsoftware.com/aliens"

function App() {
  const [aliens, setAliens] = useState([])

  async function buscarAliens() {
    try {
      const response = await axios.get(url)
      setAliens(response.data)
    } catch (error) {
      console.error('Error axios data:', error)
    }
  }

  async function buscarAliensFetch() {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setAliens(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }

  useEffect(() => {
    // buscarAliens()
    buscarAliensFetch()
  }, [])

  return (
    <>
      <h1>Lista de Aliens</h1>
      {aliens.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div className="alien-list">
          {aliens.map(alien => (
            <p key={alien.id}>
              <strong>{alien?.nome === 'string' ? 'Nome não disponível' : alien.nome}</strong> — {alien?.especie === 'string' ? 'Espécie não disponível' : alien.especie} (Periculosidade: {alien.periculosidade})
              (Criado em: {alien.criadoEm}) - {alien.planeta} - (Descrição: {alien?.descricao === 'string' ? 'Descrição não disponível' : alien.descricao})
            </p>
          ))}
        </div>
      )}
    </>
  )
}

export default App

// 0
// : 
// criadoEm
// : 
// "2026-06-03T19:12:27.301Z"
// descricao
// : 
// "string"
// especie
// : 
// "string"
// id
// : 
// 2
// nome
// : 
// "string"
// periculosidade
// : 
// 10
// planeta
// : 
// "string"
