import React from 'react'
import './sign-in-layout.css'

function SignInLayout(props) {
  if (props.signInVisible === true) {
    return(
      <div className="signInContainer">
        {props.children}
      </div>
    )
  }
  return(
    <div></div>
  )
}

export default SignInLayout
