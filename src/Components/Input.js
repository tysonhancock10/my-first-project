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
  this.setState({ editItem: !this.state.editItem})
 }

 handleChange(value) {
  this.setState({ body: value})
 }
 handleUpdate(id) {
  let text = {
   text: this.state.name
  }
  axios.put(`/api/soccer/${id}`, text).then((response) => {
      console.log(id)
    this.props.updatePlayer(response.data);
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
      onChange = {(e) => this.handleChange(e.target.value)}
      value={this.state.name}
     />
     <button onClick={() => this.handleUpdate(this.props.id)}>Submit</button>
    </div>
    }
   </div>
  )
 }
}
export default Input