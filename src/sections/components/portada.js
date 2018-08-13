import React, { Component } from 'react'
import Menu from '../../menu/components/menu.js';
import Logo from '../../icons/components/logo.js'
import Publis from '../../publis/containers/publis.js'
import PortadaLayout from './portada-layout.js'

function Portada(props){
    return(
      <PortadaLayout>
        <Menu
          signInClick={props.signInClick}
          signInText={props.signInText}
        />
        <Logo/>
        <Publis/>
      </PortadaLayout>
    )
}

export default Portada;
