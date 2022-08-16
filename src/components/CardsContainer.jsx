import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function CardsContainer(props) {
    console.log(props.pokemonPage)
  return (
    <div className='cards-container' >
        <h2>All Pokemons</h2>
        <div className='line'></div>
        <div className='cards' >
            {props.pokemonPage.map(pokemon=><Card pokemonPage={props.pokemonPage} key={pokemon.id} url={pokemon.url} />)}
        </div>
        </div>
  )
}
