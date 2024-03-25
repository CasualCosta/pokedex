import { useCallback, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import PokemonDisplay from './components/PokemonDisplay'

function App() {
  // const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>('')
  
  return (
    <div className='flex flex-col justify-start h-dvh'>
      <div>
        <SearchBar setSearchTerm={setSearchTerm} searchInput={searchInput} setSearchInput={setSearchInput} />
        
      </div>
      <PokemonDisplay searchTerm={searchTerm} />
    </div>
  )
}

export default App
