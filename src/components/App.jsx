import React, { useEffect, useState } from 'react';
import CardsContainer from './CardsContainer';

function App() {
  let [pageNo,setPageNo] = useState(1)
  let [pokemonPage,setPokemonPage] = useState([])
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(pageNo-1)*20}`)
        .then(resp=>resp.json())
        .then(data=>setPokemonPage(data.results))
    },[pageNo])
  function handlePageChange(){
    let newPage = pageNo+1
    setPageNo(newPage)
  }
  return (
  <div className='app'>
 <nav>
  <h1>
     Pokemon: Catch'em all
    
    </h1>
 </nav>
 <CardsContainer pokemonPage={pokemonPage}/>
 <div className='page-section'>
 <h3>Page No: {pageNo} </h3>
 <button onClick={()=>handlePageChange()}>Next Page</button>
 </div>
  </div>
  );
}

export default App;
