import React from 'react'
import ServicioItem from './servicio-item'
import Section from '../../widgets/components/section'
import './servicios.css'
import Waypoint from 'react-waypoint'

function Servicios() {

  const handleWaypointEnter = () => {
    var serviciosContainer = document.getElementById('serviciosContainer')
    var titleServicios = document.getElementById('titleServicios')
    serviciosContainer.classList.add("animationIn")
    titleServicios.classList.add("animationIn")
  }
  const handleWaypointLeave = () => {
    var serviciosContainer = document.getElementById('serviciosContainer')
    // serviciosContainer.classList.remove("animationIn")

  }
  const dataServicios = [
    {
      title: "depilacion",
      description: "Trabajamos con lo ultimo en tecnología de depilación láser: indolora, rápida y  eficaz "
    },
    {
      title: "corporales",
      description: "Los mejores tratamientos, diseñados por profesionales de la estetica. Endopeel, lipolaser, circuitos y mas!"
    },
    {
      title: "faciales",
      description: "Nuestros profesionales esteticos te ayudaran a corregir cualquier imperfeccion."
    },
  ]
  return(
    <div
      id="Servicios"
      className="servicios"
    >

      <div id="titleServicios" className="titleServicios">
        <Section
          sectionTitle="Nuestros Servicios"
          color="#333333"
        />
      </div>

      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      />
      <div
        id="serviciosContainer"
        className="serviciosContainer"
      >

        {
          dataServicios.map((servicio, index) => {
            return(
              <ServicioItem
                key={index}
                title={servicio.title}
                description={servicio.description}
              />

            )
          })
        }

      </div>


    </div>

  )
}
 export default Servicios
