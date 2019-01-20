import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input'
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
        this.setState({
            players: data
        })
    }


    handleDeletePlayer(player, id) {
        axios.delete(`/api/soccer${id}`)
            .then((response) => {
                this.setState({
                    players: response.data
                })
            })
    }
   

    render() {
        const favePlayers = this.state.players.map((player) => 
            <div>
                <h4>{player.name}</h4>
                <h5>{player.team}</h5>
                <p>{player.body}</p>
                <p>{player.index}</p>
                <Input 
                updatePlayer={this.handleUpdate}
                id={player.id}
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
                    placeholder={'What Team?'}>
                </input>
                <input onChange={(e) => {
                    this.handleTeamInput(e.target.value)
                }}
                    value={this.state.teamInput}
                    placeholder={'Why are they great?'}>
                </input>
                <input onChange={(e) => {
                    this.handleUpdatePlayer(e.target.value)
                }} value={this.state.players}
                    placeholder={'update me'}>
                </input>
                
            

                <button onClick={() => { this.handleGetPlayer() }}>Get Players</button>
                <button onClick={() => { this.handleAddPlayer() }}>Add Players</button>
                
                {favePlayers}
            </div>
        )

    }
}




export default Player