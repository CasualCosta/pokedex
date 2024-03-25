import React, { useState, useEffect } from 'react'

const link = "https://pokeapi.co/api/v2/pokemon/"

function getColor(value: string): string{
    switch(value){
        case "normal": return "bg-lime-300"
        case "fire": return "bg-orange-500"
        case "water": return "bg-blue-600"
        case "electric": return "bg-yellow-300"
        case "grass": return "bg-green-500"
        case "ice": return "bg-teal-300"
        case "fighting": return "bg-red-700"
        case "poison": return "bg-fuchsia-700"
        case "ground": return "bg-yellow-200"
        case "flying": return "bg-violet-400"
        case "psychic": return "bg-fuchsia-700"
        case "bug": return "bg-lime-400"
        case "rock": return "bg-amber-600"
        case "ghost": return "bg-violet-500"
        case "dragon": return "bg-violet-800"
        case "dark": return "bg-yellow-950"
        case "steel": return "bg-slate-400"
        case "fairy": return "bg-purple-300"
        case "stellar": return "bg-sky-600"
        default: return "bg-slate-900"
    }
}

const headerClasses = "uppercase mt-12 text-xl"

const PokemonDisplay = ({searchTerm}: {searchTerm: string}) => {
    const [pokemon, setPokemon] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(searchTerm === ''){
            setPokemon(null)
            setLoading(false)
            return
        }
        setLoading(true)
        fetch(`${link}${searchTerm.toLowerCase()}`)
            .then((response) => response.json())
            .then((json:any) => {
                console.log(json)
                setPokemon(json)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [searchTerm]);

    {
    if(loading)
        return <p className={headerClasses}>Searching</p>
    if(searchTerm === "")
        return <p className={headerClasses}>Search for a pokemon</p>
    if(pokemon == null)
        return <p className={headerClasses}>Pokemon not found</p>
    }
    return <div className='flex flex-col gap-2'>
        <p className='text-2xl uppercase bg-slate-700 text-slate-100 my-4 py-2 rounded-xl'>{pokemon.name}</p>
        <img 
            className=''
            src={pokemon.sprites.front_default} 
        />
        <p className='text-xl'>Type:</p>
        {pokemon.types.map((type: any, i: number) => {
            let t: string = type.type.name
            return <p key={i} className={`text-slate-100 rounded capitalize ${getColor(t)} drop-shadow`}>{t}</p>
        })}
    </div>
}

export default PokemonDisplay