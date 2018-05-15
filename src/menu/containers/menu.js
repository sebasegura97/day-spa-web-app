import React, { Component } from 'react'
import MenuComponent from '../components/menu-component.js'

class Menu extends Component {
  menu = [
    {
      "id": 1,
      "item": "Home",
      "hover": ["hover","hover2"]
    },
    {
      "id": 2,
      "item": "Servicios",
      "hover": []
    },
    {
      "id": 3,
      "item": "Tecnologia",
      "hover": []
    },
    {
      "id": 4,
      "item": "Contacto",
      "hover": []
    },
    {
      "id": 5,
      "item": "El Centro",
      "hover": []
    }
  ]
  render(){
    return(
      <MenuComponent
        menu = {this.menu}
      />
    )
  }
}

export default Menu
