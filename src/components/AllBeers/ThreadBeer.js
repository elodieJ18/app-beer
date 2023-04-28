import React, {useEffect, useState} from "react";
import { useSearchParams } from 'react-router-dom'; 
import "../../css/styles.css"; 
import CardAllBeers from "./CardAllBeers";
import RandomBeer from "./RandomBeer";



export const ThreadBeer = () => { 

    const [allBeers, setAllBeers] = useState([]) 
    const [searchParams, setSearchParams] = useSearchParams()
    const isMaltActive = searchParams.get('malt') === 'malt'
    const isYeastActive = searchParams.get('yeast') === 'yeast' 


    useEffect(() => { 
        fetch('https://api.punkapi.com/v2/beers' +'?'+ searchParams)
       .then(response => response.json())
       .then(setAllBeers) 
     }, [searchParams])


    
  return (
    <div className="filter-and-beers-container">
        <div className="filters">
        <h2>Filters :</h2>
        <div className="filters-container">
             <button className="button-filter-allbeer" onClick={() =>  setSearchParams({})}>ALL BEERS</button>
             <button className={isMaltActive ? "button-filter-active" : "button-filter"} onClick={() => setSearchParams({ malt: 'malt'})}>MALT</button> 
             <button className={isYeastActive ? "button-filter-active" : "button-filter"}   onClick={() => setSearchParams({ yeast: 'yeast'})}>YEAST</button> 
        </div>
        <RandomBeer/>
    </div>
        <div className="home-actuality">
            {isMaltActive ? <h2>Malt</h2> : <h2>All Beers</h2> && isYeastActive ? <h2>Yeast</h2> : <h2>All Beers</h2>}
            
            <div className="home-card-all-beers">
                {(allBeers[0])  && allBeers.map((beer, id) => {
                    return <CardAllBeers beer={beer} key={id}/>
                    })
                }
            </div>
        </div>
    </div>
  );
}

export default ThreadBeer;