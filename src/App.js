import React, { Component } from 'react';
import './App.css';
import Player from './Components/Player'
import axios from 'axios';




class App extends Component {
    constructor(){
      super()
      this.state = {
      input:[]
      }
    }

      render() {
      
      return(
        <div>
          <h1>Favorite Soccer Players!</h1>
          <Player />
        </div>
      )
    }
  }
export default App