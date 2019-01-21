import React from 'react'
import axios from 'axios'
import Inputstyle from './Inputstyle.css'

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      editItem: false,
      body: ''
    }
  }

  handleClick() {
    this.setState({ editItem: !this.state.editItem })
  }

  handleChange(value) {
    this.setState({ body: value })
  }
  handleUpdate(id) {
    let text = {
      text: this.state.body
    }
    console.log(text)
    axios.put(`/api/soccer/${id}`, text).then((response) => {

      this.props.updatePlayer(response.data);
      this.handleClick();
    }).catch(error => console.log(error))
  }


  handleDelete(id) {

    axios.delete(`/api/soccer/${id}`)
    .then((response) => {
      console.log(response)

      this.props.deletePlayer(response.data);
      this.handleClick();
    }).catch(error => console.log(error))
  }


  render() {
    return (
      <div>

        {
          !this.state.editItem ?
            <button onClick={() => this.handleClick()}>Edit</button> :
            <div>
              <input class="submitbox"
                onChange={(e) => this.handleChange(e.target.value)}
                value={this.state.name}
              />
              <button onClick={() => this.handleUpdate(this.props.id)}>Submit</button>
              <button onClick={() => this.handleDelete(this.props.id)}>Delete</button>
            </div>
        }
      </div>
    )
  }
}
export default Input