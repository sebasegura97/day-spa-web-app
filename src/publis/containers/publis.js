import React, { Component } from 'react'
import PubliItem from '../components/publi-item'
import Selector from '../components/selector'
import Buttons from '../components/buttons'
import image1 from '../../../images/publi1.png'
import './publis.css'
import firebase from 'firebase/app'
import 'firebase/database'
import 'babel-polyfill'
import store from '../../store'

class Publis extends Component {
  state = {
    title: "ke enpiece asi",
    src: 'url',
    data: false,
    length: 1,
    current: 0,
    publis: [
      {
      downloadURL: image1,
      title: "Promos para vos!",
      discount: "Day spa"
      },
    ]
  }
  
 
  async componentDidMount(){
    // Cargamos el estado con las publicidades de firebase
    var database = firebase.database();
    var publis = await database.ref('/publis/').once('value').then(function (snapshot) {
      // console.log(snapshot.val())
      publis = JSON.stringify(snapshot.val())
      publis = JSON.parse(publis)

      function json2array(json) {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function (key) {
          result.push(json[key]);
        });
        return result;
      }
      
      publis = json2array(publis)
      // Actualizamos el estado global
      store.dispatch({
        type: 'SET_PUBLIS',
        payload: {
          publis,
        }
      })
      return (publis)
    })

    const length = publis.length - 1; //Le resto 1 para simplificar el cambio de estado, ya que el array empieza en 0
    this.setState({
      publis,
      length
    })

    // Hacemos que las publicidades se cambien cada un cierto intervalo:
    this.changePubli = setInterval( () => {
      if (this.state.current == this.state.length){
        this.setState({
          current: 0,
        })
      } 
      else {
      this.setState({
        current: this.state.current + 1, 
      })
      
      } 
    }, 3000)
  }


 

  handleSelector = (i) => {
    return () => {
      this.setState({current: i})
      // console.log('handleSelector');
    };
  }

  handleButton = (i) => {
    if ( i == -1 && this.state.current == 0 ){
      return () => { 
        this.setState({current: this.state.length})
        window.clearInterval(this.changePubli)
      }
    }
    if ( i == 1 && this.state.current == this.state.length ){
      return () => { 
        this.setState({current: 0})
        window.clearInterval(this.changePubli)
      }
    }
    return () => {
      this.setState({current: this.state.current + i})
      window.clearInterval(this.changePubli)
    }
  }
  

  render(){
    return(
      <div
        className = "publisContainer"
        // onClick={this.changePubli()}
      >
        <Buttons
          handleButton = {this.handleButton}
          value = {1}
          style = "button right"
        />

        <Buttons
          handleButton = {this.handleButton}
          value = {-1}
          style = "button left"
        />

        <PubliItem
          className="publiItem"
          current={this.state.current}
          publi={this.state.publis[this.state.current]}
        />

        <Selector
          publis={this.state.publis}
          handleSelector={this.handleSelector}
          selected={this.state.current}
        />
      </div>

    )
  }
}

export default Publis;
