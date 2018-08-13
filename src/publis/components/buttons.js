import React from 'react'
import './buttons.css'

function Buttons(props){
  return(
    <button
      onClick={props.handleButton(props.value)}
      className={props.style}
    >
    </button>

  )
}

export default Buttons;
