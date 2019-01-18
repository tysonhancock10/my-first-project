import React, {Component} from 'react';
import axios from 'axios';
class Player extends Component{
    constructor(){
        super()
        this.state = {
            players: [],
            playerInput: ""
        }
    
}

handleGetPlayer(){
    axios.get('/api/soccer')
    .then(response =>{
        this.setState({
            players: response.data
        })
    })

}
handlePlayerInput(value) {
    this.setState({
      playerInput: value
    })
  }

handleAddPlayer(){
    
    
    axios.post('/api/soccer')
    .then(response =>{
        console.log(response)
        this.setState({
            players: response.data
        })
    })

    this.setState({
        playerInput: ''
    })
}

render(){
    // const favePlayers = this.state.players.map((player) => {
    //     const{playerInput}=this.state}
    
    return(
        <div>
        <input onChange={(e) => {
            this.handlePlayerInput(e.target.value)}}
            value={this.state.playerInput}
            placeholder={'Need Players?'}>
        </input>
        
        <button onClick={() => {this.handleGetPlayer()}}>Get Players
        </button>
        <button onClick={() => {this.handleAddPlayer()}}>Add Players</button>
        </div>
    )

    }
}




export default Player