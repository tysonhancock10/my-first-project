import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input'
import Styling from './Styling.css'
import Delete from './delete.js'
class Player extends Component {
    constructor() {
        super()
        this.state = {
            players: [],
            playerInput: "",
            teamInput: "",
            bodyInput: "",


        }
        this.handleUpdatePlayer= this.handleUpdatePlayer.bind(this)
    }

    handleGetPlayer() {
        axios.get('/api/soccer')
            .then(response => {
                console.log(response)
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
    handleTeamInput(val) {
        this.setState({
            teamInput: val
        })
    }
    handleBodyInput(val) {
        this.setState({
            bodyInput: val
        })
    }



    handleAddPlayer() {
        const bodyObj = {
            name: this.state.playerInput,
            body: this.state.bodyInput,
            team: this.state.teamInput
        }

        axios.post('/api/soccer', bodyObj)
            .then(response => {
                console.log(response)
                this.setState({
                    players: response.data
                })
            })

        this.setState({
            playerInput: '',
            bodyInput: '',
            teamInput: '',
        })
    }
    handleUpdatePlayer(data) {
        console.log(data)
        this.setState({
            players: data
        })
    }


    // handleDeletePlayer(id) {
    //     axios.delete(`/api/soccer${id}`)
    //         .then((response) => {
    //             this.setState({
    //                 players: response.data
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //         })
    // }
  

    render() {
        const favePlayers = this.state.players.map((player) => 
            <div>
                <h4>{player.name}</h4>
                <h5>{player.team}</h5>
                <p>{player.body}</p>
                <p class="number" >{player.index}</p>
                
                <Input 
                updatePlayer={this.handleUpdate}
                id={player.index}
          />
          <Delete
                />
            </div>
        )
      

        return (
            <div>
                <input onChange={(e) => {
                    this.handlePlayerInput(e.target.value)
                }}
                    value={this.state.playerInput}
                    placeholder={'Need Players?'}>
                </input>
                <input onChange={(e) => {
                    this.handleBodyInput(e.target.value)
                }}
                    value={this.state.bodyInput}
                    placeholder={'Why are they great?'}>
                </input>
                <input onChange={(e) => {
                    this.handleTeamInput(e.target.value)
                }}
                    value={this.state.teamInput}
                    placeholder={'What team?'}>
                </input>
            

                <button class="getplayers" onClick={() => { this.handleGetPlayer() }}>Get Players</button>
                <button class="addplayers" onClick={() => { this.handleAddPlayer() }}>Add Players</button>
                <img class="soccerplayer" src="https://www.theglobeandmail.com/resizer/r-5cN0JPJEiUbhTXvwfZoUw7HtI=/620x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/RA6HWRZHG5L5DHSB2VEXMRTWBE.jpg"></img>
                <img class="ronaldo" src="https://ronaldo.com/wp-content/uploads/2018/08/Ronnie-Juve-696x452.jpg"></img>
                
                {favePlayers}
            </div>
        )

    }
}




export default Player