import React from "react";
import Counter from "../Counter"; //import couunter- also import in main


function Player(props) {
  // console.log(props)
  return (
    <div className='player'>
      <span className="player-name"> 
          <button className= "remove-player" onClick={() => props.remove(props.id)}> X </button>
          {props.name}
      </span>
      <Counter 
    name={props.name}
      /> 
    </div>
  )
}

export default Player;
