import React from 'react'
import Section from '../../widgets/components/section.js'
import './contacto.css'
import Waypoint from 'react-waypoint'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faEmail from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faWhatsApp from '@fortawesome/fontawesome-free-brands/faWhatsapp'


function Contacto(){
  const enterSection = () => {
    const titleContacto = document.getElementById('titleContacto')
    const textContacto = document.getElementById('textContacto')
    const redesContacto = document.getElementById('redesContacto')
    titleContacto.classList.add('animate')
    textContacto.classList.add('animate')
    redesContacto.classList.add('animatePop')
  }
  return(
    <div className="contactoContainer" id="contacto">
      <div
        id="titleContacto"
        className="sectionContacto"
      >
        <Section
          sectionTitle="Contacto"
          color="white"
        />
      </div>

      <p id="textContacto" className="contactoText"> En nuestras redes sociales te responderemos de inmediato:</p>
      <div id="redesContacto" className="iconContainer">
        {/* facebook */}
        <a
          className="contactoAncla"
          href="https://www.facebook.com/Dayspasalta/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="contactoIcon"
          />
          <p>Facebook</p>
        </a>
        {/* instagram */}
        <a
          className="contactoAncla"
          href="https://www.instagram.com/dayspasalta/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="contactoIcon"
          />
          <p>Instagram</p>

        </a>
        {/* email */}
        <Waypoint
          onEnter={enterSection}
        >
          <a
            className="contactoAncla"
            href="mailto:consultas@dayspasalta.com"
          >
            <FontAwesomeIcon
              icon={faEmail}
              className="contactoIcon"
            />
            <p>E-mail</p>

          </a>
        </Waypoint>

          {/* WhatsApp */}
          <a
            className="contactoAncla"
            href="https://api.whatsapp.com/send?phone=5493876831581"
            target="_blank"

          >
            <FontAwesomeIcon
              icon={faWhatsApp}
              className="contactoIcon"
            />
            <p>WhatsApp</p>

          </a>
        </div>
        <div className="contactoLayer"></div>
      </div>
  )
}

export default Contacto;
