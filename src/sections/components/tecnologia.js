import React from 'react'
import Section from '../../widgets/components/section'
import './tecnologia.css'
import tecnologia from '../../../images/tecnologia.png'
import Waypoint from 'react-waypoint'

function Tecnologia(){
  const animation = () => {
    var tecnologiaImage = document.getElementById('tecnologiaImage')
    var tecnologiaText = document.getElementById('tecnologiaText')
    tecnologiaImage.classList.add('animate');
    tecnologiaText.classList.add('animate');
  }
  return(
    <div className="tecnologia" id="tecnologia" >
      <Waypoint
        onEnter={animation}
      />
      <div className="tecnologiaImage" id ="tecnologiaImage">
        <img src={tecnologia}></img>
      </div>

      <div className="tecnologiaText" id="tecnologiaText">
        <h2>NUESTRA TECNOLOGIA</h2>
        <p className="tecnologiaParragraph">En day spa nos enfocamos en contar con las
          maquinarias y tecnologias de vanguardia para
        el cuidado de tu silueta. Nos mantendremos siempre actualizados para poder brindarte el servicio que mereces.</p>
      </div>
    </div>
  )
}

export default Tecnologia
