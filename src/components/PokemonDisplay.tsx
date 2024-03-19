import React from 'react'

type Props = {
    pokemon: any
}
const PokemonDisplay: React.FC<Props> = ({pokemon}) => {
    if(!pokemon)
        return <div>Loading</div>
  return (
    <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.front_female} />
    </div>
  )
}

export default PokemonDisplay