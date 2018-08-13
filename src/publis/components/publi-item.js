import React from 'react'
import './publi-item.css'
import { CSSTransitionGroup } from 'react-transition-group'


function PubliItem(props, state){
  return(
    <CSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <div
        className="publi"
        key={props.publi.image}

      >
        <h2 className="publiTitle">{props.publi.title}</h2>
        <div className="publiContainer">

          <img
            src={props.publi.image}
            className="publiImage"
          >
          </img>
          <button className="buttonVer">Ver promocion</button>


        </div>
        <h1 className="publiPromo">{props.publi.promo}</h1>
      </div>
    </CSSTransitionGroup>
  )
}

export default PubliItem;
