import React, {useEffect, useState, useParams} from "react";
import "../../css/styles.css"; 
import CardOneBeer from "../PageOneBeer/CardOneBeer";


export const ThreadOneBeer = () => {   

    const [allBeers, setAllBeers] = useState([]) 

    const id = window.location.pathname;

    useEffect(() => { 
        fetch(`${process.env.PUNK_API_URL}`+ id)
       .then(response => response.json())
       .then(setAllBeers) 
     }, [])

     console.log(setAllBeers)
 
    
  return (
    <div className="thred">
        <p>hello</p>
                {(allBeers[0])  && allBeers.map((beer, id) => {
                    return <CardOneBeer beer={beer} key={id}/>
                    })
                }
    </div>
  );
}

export default ThreadOneBeer;