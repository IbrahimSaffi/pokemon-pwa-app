import React, { useEffect, useState } from 'react'

export default function Card({url,pokemonPage}) {
    let [pokemon,setPokemon] =useState(null)

    useEffect(() => {
      fetch(url)
      .then(resp=>resp.json())
      .then(data=>setPokemon(data))
    }, [pokemonPage])
    
  return (
    <div className='card' >
        {pokemon!==null && (
            <div>
                <p className="name">{pokemon.name}</p>
                <div className='img'>
                    <img src={pokemon.sprites.front_default} alt="" />
                    
                </div>
                <p className='type' >{pokemon.types[0].type.name}</p>
            </div>
        )}
    </div>
  )
}
