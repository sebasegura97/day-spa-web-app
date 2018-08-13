import React, { Component } from 'react';
// import Menu from '../../menu/containers/menu.js';
import HomeLayout from '../components/home-layout.js'
// import Logo from '../../icons/components/logo.js'
// import Publis from '../../publis/containers/publis.js'
import Portada from '../../sections/components/portada.js'
import Servicios from '../../servicios/components/servicios'
import Tecnologia from '../../sections/components/tecnologia'
import Elegirnos from '../../sections/components/elegirnos'
import Contacto from '../../sections/components/contacto'
import SignIn from '../../widgets/components/sign-in'
import firebase from 'firebase'

// Conexion con firebase:
var config = {
  apiKey: "AIzaSyDpsGLGYKzruUyKWpYETrAkEVO3s8u9Vk8",
  authDomain: "dayspa-177318.firebaseapp.com",
  databaseURL: "https://dayspa-177318.firebaseio.com",
  projectId: "dayspa-177318",
  storageBucket: "gs://dayspa-177318.appspot.com",
  messagingSenderId: "789199762300"
};

firebase.initializeApp(config);



class Home extends Component {

  state = {
    menuVisible: false,
    isSignedIn: false, // Local signed-in state.
    menuItemSignInText: "Ingresar",
    signInVisible: false,
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
          // if no user, we can't acces user data (obviusly)
          if (user) {
            // if there is user we can access some user info:
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;

            // Some info that we get and use to need is in user.providerData.
            var providerData = user.providerData;

            // Show user info on console
            console.log(providerData)

            // Set state to toggle sign in visibility and menu text.
            this.setState({
              menuItemSignInText: "Salir",
              signInVisible: false,
            })
          }

          // if there is no user, (or user logged out) we change menu log text
          else{
            this.setState({
              menuItemSignInText: "Ingresar"
            })
          }

          // Always set the local state for signingn
          this.setState({
            isSignedIn: user,
          })
        }
    );
  }

  signInClick = () => {
    // if is signed in, sign out
    if (this.state.isSignedIn) {
      firebase.auth().signOut().then(function() {
        // Sign out succesfull
        console.log('Usuario Correctamente deslogueado');
      }).catch(function(error) {
        // Something happened
        console.log(error);
      });
    // else, if there is no user, show signIn widget
    } else {
      this.setState({
        signInVisible: true,
      })
    }
  }
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  // I don't know what is it for, but if a delete the web doesn't work
  render(){
    const toggleMenu = () => {
      if (this.state.menuVisible == true) {
        this.setState({menuVisible: false})
      } else {
        this.setState({menuVisible: true})
      }
    }


    return(
      <HomeLayout>
        <SignIn signInVisible={this.state.signInVisible} />
        <Portada
          signInClick={this.signInClick}
          signInText={this.state.menuItemSignInText}
        />
        <Servicios />
        <Tecnologia />
        <Elegirnos />
        <Contacto />
      </HomeLayout>
    )
  }
}


export default Home
