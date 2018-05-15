import React from 'react';
import MenuItem from './menu-item.js'
import './menu-component.css'

function MenuComponent (props) {
  return(
    <div className="MenuComponent">

      {
        props.menu.map((item) => {
          console.log(item);

          return(
            <MenuItem
              {...item}
              key = {item.id}
              item = {item.item}
              hover = {item.hover}
            />

          )
        }
        )
      }
    </div>
  )
}

export default MenuComponent
