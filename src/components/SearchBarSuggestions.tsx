import { useCallback, useEffect, useState } from 'react'


const url = "https://pokeapi.co/api/v2/pokemon/?limit=1500"

const SearchBarSuggestions = ({searchInput, selectedBar, handleClick: handleClick}: {searchInput: string, selectedBar: boolean, handleClick: (value: string) => void}) => {
    
    const [suggestions, setSuggestions] = useState<Array<any>>([])
    const [dex, setDex] = useState<Array<any>>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        const sugg = dex.filter(entry => entry.name.includes(searchInput))
        console.log(sugg)
        setSuggestions(sugg)
        
        
    }, [searchInput])
    useEffect(() => {
        fetchPokemon()
    }, [])
    
    const fetchPokemon = async () => {
        console.log("Fetching the API.")
        try {
          const response = await fetch(`${url}`)
          const data = await response.json()
          console.log(data)
          if(data){
            setDex(data.results)
          }
        } catch(error){
          console.log(error)
        } finally {
            setLoading(false)
        }
    }


    if(loading)
        <div className={`${selectedBar ? "opacity-100" : "opacity-0"} max-h-20 bg-slate-500 overflow-y-auto absolute w-full top-14`}>
            Loading
        </div>
    return (
        <div className={`${selectedBar ? "opacity-100" : "opacity-0"} max-h-40 bg-slate-500 overflow-y-auto absolute w-full top-14 rounded z-1`}>
            {suggestions.map((sug, i) => {
                return (
                    <button 
                        key={i}
                        className='w-full hover:bg-slate-400'
                        onClick={() => handleClick(sug.name)}
                    >
                        {sug.name}
                    </button>
                )
            })}
        </div>
    )
}

export default SearchBarSuggestions
