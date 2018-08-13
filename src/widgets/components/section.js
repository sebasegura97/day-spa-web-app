import React from 'react'
import './section.css'

function Section(props){
  return(
    <section className="section">
      <div className="sectionDivisor">
        <h2
          className="sectionTitle"
          style={{color:props.color}}
        >
          {props.sectionTitle}
        </h2>
        <div className="divisor">
          <div className="divisorRight"></div>
          <div className="divisorCenter"></div>
          <div className="divisorLeft"></div>
        </div>
      </div>

    </section>
  )
}

export default Section
