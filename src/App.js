import React, { Component } from 'react';
import './App.css';
import Player from './Components/Player'
import Styles from './Styles.css'
import Title from './Title.js'




class App extends Component {
    constructor(){
      super()
      this.state = {
      input:"Favorite Soccer Players!"
      }
    }

      render() {
      
      return(
        <div>
          <Title />
          <Player />
        </div>
      )
    }
  }
export default App