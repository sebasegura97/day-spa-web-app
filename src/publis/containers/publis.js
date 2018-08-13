import React, { Component } from 'react'
import PubliItem from '../components/publi-item'
import Selector from '../components/selector'
import Buttons from '../components/buttons'
import image1 from '../../../images/publi1.png'
import image2 from '../../../images/homeBg.png'
import './publis.css'
import firebase from 'firebase'


class Publis extends Component {

  state = {
    title: "ke enpiece asi",
  }

  componentDidMount(){
    var database = firebase.database();
    console.log(database);
    var publi = {
      title: "y eña?"
    }
    
    var storage = firebase.storage();
    var publisRef = storage.ref('Publicidades/publi1.png')

    publisRef.getDownloadURL().then((url)=>{
      var refURL = url;
      console.log(url);
      this.setState({
        refURL: refURL,
      })
    })
  }
  publis = [
    {
      title: this.state.title,
      image: this.state.refURL,
      promo: "Viernes 40% off"
    },
    {
      title: "UltraShape v6",
      image: image2,
      promo: "Jueves 30% off"
    },

  ]
  constructor(props){
    super(props);
    const length = this.publis.length - 1; //Le resto 1 para simplificar el cambio de estado, ya que el array empieza en 0

    this.state = {
      current: 0,
      length,
    }

    // console.log(this.publis[0]);
  }

  handleSelector = (i) => {
    return () => {
      this.setState({current: i})
      // console.log('handleSelector');
    };
  }

  handleButton = (i) => {
    if ( i == -1 && this.state.current == 0 ){
      return () => { this.setState({current: this.state.length})}
    }
    if ( i == 1 && this.state.current == this.state.length ){
      return () => { this.setState({current: 0})}
    }
    return () => {
      this.setState({current: this.state.current + i})
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
          publi={this.publis[this.state.current]}
        />

        <Selector
          publis={this.publis}
          handleSelector={this.handleSelector}
          selected={this.state.current}
        />
      </div>

    )
  }


  // render(){
  //   return (
  //     <div className="publisContainer">
  //       {
  //         this.publis.map( (publi, index) => {
  //           return(
  //
  //             <PubliItem publi={publi} key={index}/>
  //           )
  //         }
  //         )
  //       }
  //     </div>
  //
  //   );
  //
  // }
}

export default Publis;
