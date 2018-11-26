import React from 'react'
import './publi-item.css'
import { CSSTransitionGroup } from 'react-transition-group'


function PubliItem(props){
  
  return(
    <CSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <div
        className="publi"
        key={props.current}

      >
        <h2 className="publiTitle">{props.publi.title}</h2>
        <div className="publiContainer">

          <img
            src={props.publi.downloadURL}
            className="publiImage"
          >
          </img>
          <button className="buttonVer">Ver promocion</button>


        </div>
        <h1 className="publiPromo">{props.publi.discount}</h1>
      </div>
    </CSSTransitionGroup>
  )
}

export default PubliItem;
