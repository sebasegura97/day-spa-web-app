import React from 'react'
import MenuComponent from './menu-component.js'


function Menu(props) {

  const menu = [
    {
      "id": 1,
      "item": "Home",
      "href": "#",
      "hover": [
        {
          "text": "hover",
          "href": "#"
        },
        {
          "text": "hover2",
          "href": "#"
        }
      ]
    },
    {
      "id": 2,
      "item": "Servicios",
      "href": "#Servicios",
      "hover": [
        {
            "text": "Depilacion",
            "href": "#servicios"
        },
        {
          "text": "Corporales",
          "href": "#servicios"
        },
        {
          "text": "Faciales",
          "href": "#servicios"
        },
      ]
    },
    {
      "id": 3,
      "item": "Tecnologia",
      "href": "#tecnologia",
      "hover": []
    },
    {
      "id": 4,
      "item": "Contacto",
      "href": "#contacto",
      "hover": []
    },
    {
      "id": 5,
      "item": "El Centro",
      "hover": []
    },
    {
      "id": 6,
      "item": props.signInText,
      "hover": [],
      "onClick": props.signInClick
    }
  ]

    return(
      <MenuComponent
        menu = {menu}
      />
    )

}

export default Menu
