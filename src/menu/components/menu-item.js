import React, { Component } from 'react'
import './menu-item.css'

class MenuItem extends Component{

  render(){
    return (

      <div className="MenuItem" onClick={this.props.onClick}>

        <a href={this.props.href} >
          <p   className = "MenuTitle">{this.props.item}</p>
        </a>

        <div className = "MenuHover">
          {
            this.props.hover.map( (hover, index) => {
              return(
                <a
                  key={index}
                  href={hover.href}
                >
                  <p>
                    {hover.text}
                  </p>
                </a>
              )
            })
          }
        </div>

      </div>

    )
  }

}

export default MenuItem
