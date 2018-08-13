import React from 'react'
import Section from '../../widgets/components/section.js'
import Counter from '../../widgets/components/counter.js'
import Waypoint from 'react-waypoint'

import './elegirnos.css'
function Elegirnos() {
  const counterAnmation = () => {
    var counters = document.getElementById("counters")
    var title = document.getElementById("title")
    var text = document.getElementById("text")
    counters.classList.add('animate')
    title.classList.add('animate')
    text.classList.add('animate')
  }
  return(
    <div className="elegirnosContainer">
      <div className="title" id="title">
        <Section
          sectionTitle="Por que Elegirnos"
          color="#333333"
        />
      </div>

      <p className="elegirnosText" id="text">
        En day spa nos preocupamos por vos, llevamos
        tu seguimiento y te guiamos para que puedas
        conseguir los resultados que esperas.
      </p>
      <Waypoint
        onEnter={counterAnmation}
      />
      <div
        className="counters"
        id="counters"
      >
        <Counter
          final = {2240}
          text = "Clientes Satisfechos"
        />
        <Counter
          final = {10}
          text = "Salas para que nunca esperes"
        />
        <Counter
          final = {12}
          text = "Expertos en belleza"
        />
        <Counter
          final = {48}
          text = "Diferentes tratamientos"
        />
      </div>
    </div>
  )
}

export default Elegirnos
