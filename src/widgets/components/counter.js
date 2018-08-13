import React, { Component } from 'react'
import './counter.css'
import Waypoint from 'react-waypoint'
class Counter extends Component {

  state = {
    current: 1,
  };


  render() {
    this.Interval = () =>  {

      if (this.props.final > 100) {
        this.timer = 5;
      } else{
        this.timer = 100;
      }

      setInterval(()=>{
        if (this.state.current < this.props.final) {
          this.setState({current: this.state.current + 1 })
        }
      }, this.timer)
    }

    this.byeInterval = (state) => {
      clearInterval(this.Interval)
    }
    return(

      <div onClick={this.Interval} id="counter" className="counterContainer">
        <Waypoint
          onEnter={this.Interval}
          onLeave={this.byeInterval}
        />
        <h2 className="counterNumber">{this.state.current}</h2>
        <p className="counterText"> {this.props.text} </p>
      </div>
    )
  }
}
// function Counter(props) {
//   var i = 0
//
//   const interval = setInterval( () => {
//     const counter = document.getElementById('counter');
//     i++
//     counter.innerHTML = i.toString()
//     console.log('funciono');
//   }, 100)
//
//   if (i>10) {
//     clearInterval(this.interval)
//   }
//   return(
//     <div>
//
//       <p id="counter">0</p>
//       <p> Clientes Satisfechos</p>
//     </div>
//   )
// }

export default Counter;
