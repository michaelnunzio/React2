import React from "react";

class Counter extends React.Component {


  state={
    score: 0
  };

  incScore = () => {
    this.setState(prev => ({ //adding the callback to make it async- worked! 
        score: prev.score +1
      }));
    console.log(this.props.name + "- Plus One")
    }

decScore = () => { //adding the callback to make it async- worked!
  this.setState(prev => ({
      score: prev.score - 1
    }));
  console.log(this.props.name + "- Minus One")
  }


    render() {
      return (

          <div className='counter'>
            <button className='counter-action decrement' onClick={this.decScore}> - </button>
            <span className='counter-score'>{this.state.score}</span>
            <button className='counter-action increment' onClick={this.incScore}> + </button>
          </div>
      )
    }
}


export default Counter;
