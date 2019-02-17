import React, { Component } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
// import Counter from "./components/Counter";
import "./app.css";

class App extends Component {

  state= {

    players: [  
      {
      name: "Hutch",
      id: 1
    },
    {
      name: "Slater",
      id: 2
    },
    {
      name: "Griffey",
      id: 3
    },
    {
      name: "Dane",
      id: 4
    },
    {
      name: "Mike",
      id: 5
    }
  ]
  }

// remove from game
  removePlayer = (id) => {
    this.setState(prev => ({
      players: prev.players.filter(p => p.id !== id)
    }))
    console.log('remove')
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (   

            <div className='scoreboard'>
              <Header title={'Scoreboard'}
              totalPlayers={this.state.players.length}/>
                {this.state.players.map( player =>
                      <Player 
                      name={player.name}
                      key={player.id.toString()}
                      id={player.id}
                      remove= {this.removePlayer}
                      />
                )}

              </div>

      )};
      //display name and score in player and counter
}


export default App;

