import React from 'react'
import './servicio-item.css'

function ServicioItem(props){
  return(
    <div className="servicioItem" >
      <h2 className="servicioTitle">{props.title}</h2>
      <p className="servicioDescription">{props.description}</p>
      <a className="verMas">VER MAS</a>
    </div>
  )
}

export default ServicioItem
