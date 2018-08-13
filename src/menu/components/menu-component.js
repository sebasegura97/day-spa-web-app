import React from 'react';
import MenuItem from './menu-item.js'
import './menu-component.css'
// import Waypoint from 'react-waypoint'
function MenuComponent (props) {


  // const menuFix = () => {
  //   const menu = document.getElementById('menu')
  //   menu.classList.add('menuFix')
  // }
  return(

    <div className="MenuComponent" id="menu">
      {/* <Waypoint
        onLeave={menuFix}
      /> */}
      <div className="MenuTabs">
        {
          props.menu.map((item) => {
            return(
              <MenuItem
                {...item}
                key = {item.id}
                item = {item.item}
                hover = {item.hover}
                href = {item.href}
                onClick = {item.onClick}
              />

            )
          }
          )
        }
      </div>
    </div>
  )
}

export default MenuComponent
