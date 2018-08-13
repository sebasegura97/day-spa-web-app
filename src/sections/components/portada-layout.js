import React from 'react'
import './portada-layout.css'

function PortadaLayout(props){
  return(
    <div className='portada'>
      {props.children}
    </div>
  )
}

export default PortadaLayout
