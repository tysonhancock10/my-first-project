import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input'
import Styling from './Styling.css'


class Player extends Component {
    constructor() {
        super()
        this.state = {
            players: [],
            playerInput: "",
            teamInput: "",
            bodyInput: "",


        }
        this.handleUpdate= this.handleUpdate.bind(this)
        this.handleDelete= this.handleDelete.bind(this)
    }

    handleGetPlayer() {
        axios.get('/api/soccer')
            .then(response => {
                
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
    handleUpdate(data) {
        
        this.setState({
            players: data
        })
    }
    handleDelete(data) {
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
            <div className="everything">
                <div className="text">
                <h4>{player.name}</h4>
                <h5>{player.team}</h5>
                <p>{player.body}</p>
                <p className="number" >{player.index}</p>
                
                <Input 
                updatePlayer={this.handleUpdate}
                deletePlayer={this.handleDelete}
                id={player.index}
          />
          
          
                </div>
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
            

                <button className="getplayers" onClick={() => { this.handleGetPlayer() }}>Get Players</button>
                <button className="addplayers" onClick={() => { this.handleAddPlayer() }}>Add Players</button>
                <img alt="" className="soccerplayer" src="https://www.theglobeandmail.com/resizer/r-5cN0JPJEiUbhTXvwfZoUw7HtI=/620x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/RA6HWRZHG5L5DHSB2VEXMRTWBE.jpg"></img>
                <img alt="" className="ronaldo" src="https://ronaldo.com/wp-content/uploads/2018/08/Ronnie-Juve-696x452.jpg"></img>
                
                {favePlayers}
            </div>
        )

    }
}




export default Player