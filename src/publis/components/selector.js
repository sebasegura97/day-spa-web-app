import React from 'react'
import './selector.css'


function Selector(props){
  return(
    <div className="selectorContainer">
      {
        props.publis.map( (publi, index) => {

          if (index == props.selected) {
            return(
              <div
                className="selector selected"
                key={index}
                onClick={props.handleSelector(index)}
              >
              </div>
            )
          }
          return(
            <div
              id="element"
              className="selector"
              key={index}
              onClick={props.handleSelector(index)}
            >
            </div>
          )
        })
      }
    </div>

  )
}

export default Selector;
