import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import soccer from './Components/soccer'
import axios from 'axios';




class App extends Component {
    constructor(){
      super()
      this.state = {
        Player: "",
        Team: "",
        league: "",
        myRating: ""
      }
    }

      handlePlayerInput(val) {
        this.setState({
          Player: val
        })
      }

      handleTeamInput(val) {
        this.setState({
          Team: val
        })
      }

      handleAddPlayer(){
        const bodyObj = {
          
        }
      }
      componentDidMount(){
        axios.get('/api/soccer')
        .then(res => console.log(res))
      }



    
      render() {
        const mappedPlayers = this.state.Player.map((eachPlayerObj) => {
    
          return (
            <Player key={eachPlayerObj.index} Player={eachPlayerObj} />
          )
        })
    
    
        return (
          <div className="App">
            {this.state.messages.length ? (
              <div>
                <div
                  style={{ height: 60, width: '50vw', background: 'lightgrey', border: "1px black solid", margin: '15px auto', paddingTop: '30px' }}
                >
    
                  <input
                    onChange={(e) => this.handleTeamInput(e.target.value)}
                    value={this.state.author}
                    placeholder={'Add Team'}
                  />
                  <input
                    onChange={(e) => this.handlePlayerInput(e.target.value)}
                    value={this.state.messageInput}
                    placeholder={'Add Player'}
                  />
                  <button onClick={() => this.handleAddPlayer()}>Add This Player</button>
                </div>
                {mappedPlayers}
              </div>
            ) : (
                <button
                  onClick={() => this.handleGettingMessages()}
                  style={{ marginTop: '48vh', height: 70, width: 200, background: 'lightGreen', borderRadius: 15, fontSize: 24, fontWeight: 'bold' }}
                >Get Messages</button>
              )}
          </div>
        );
      }
    }

export default App;
