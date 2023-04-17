import React, {useState, useEffect} from "react";
import "../../css/styles.css"; 
import CardAllBeers from "./CardAllBeers";

export const RandomBeer = () => {     
    const [randomBeer, setRandomBeer] = useState([])

    const onClickHandler = async () => {
        fetch("http://api.punkapi.com/v2/beers/random")
        .then(response => response.json())
        .then(setRandomBeer)
        .catch((err) => console.log(err));
     }

    useEffect(() => { 
        onClickHandler()
     }, [])


  return (
    <div className="random-beer">
        <p>Do you want a random beer ?</p>
        <div className="random-beer-image-container" >
        <button className="button-random-beer" onClick={onClickHandler}>GET A  RANDOM BEER</button>
          {(randomBeer[0])  && randomBeer.map((beer, id) => {
                    return <CardAllBeers beer={beer} key={id}/>
                    })
            } 
        </div>
    </div>
  );
}

export default RandomBeer;