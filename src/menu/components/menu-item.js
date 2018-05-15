import React, { Component } from 'react'
import './menu-item.css'

class MenuItem extends Component{

  // hover = (hover) =>{
  //   return(
  //     <p key={this.ID}>{hover} {this.id}</p>
  //   )
  // }

  render(){
    return (
      <div className="MenuItem">

        <p   className = "MenuTitle">{this.props.item}</p>

        <div className = "MenuHover">
          {
            this.props.hover.map( (hover, index) => {
              return(
                <p key={index}>{hover}</p>
              )
            })
          }
        </div>

      </div>

    )
  }

}

export default MenuItem
