import { useCallback, useReducer, useState } from 'react'
import './App.css'
import { PokemonType } from './types'
import SearchBar from './components/SearchBar'
import PokemonDisplay from './components/PokemonDisplay'

const url = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  // const [loading, setLoading] = useState(true)

  const [pokemon, setPokemon] = useState<any>()
  const [searchTerm, setSearchTerm] = useState<string>('1')
  const fetchPokemon = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data)
      if(data){
        setPokemon(data)
      }
    } catch(error){
      console.log(error)
    }
  }, [searchTerm])
  fetchPokemon()
  
  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PokemonDisplay pokemon={pokemon} />
    </>
  )
}

export default App
