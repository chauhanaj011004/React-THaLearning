import React from 'react'
import seriesData from '../api/seriesData'

const Netflix = () => {
  return (
    <ul>
      {seriesData.map((currentEle)=>
      {
         return(
        <li key={currentEle.id}> 
          <div>
           <img src={currentEle.img_url} width="40%" height="40%" />
          </div>
         <h1>Name:{currentEle.name}</h1>
         <h2>Rating: 8.2</h2>
         <p>Summary : {currentEle.description}</p>
         <p>Genre : {currentEle.genre}</p>
         <p>Cast : {currentEle.cast} </p>
         <a href={currentEle.watch_url} target='_blank'>
           <button >WatchNow</button>
           </a>
        </li>
         );
      })
    }  
   
    </ul>

    
  )
}

export default Netflix;
