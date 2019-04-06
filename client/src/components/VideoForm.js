import React from "react";
import {Form, Button} from "semantic-ui-react"
import axios from "axios"

class VideoForm extends React.Component {
state= {video: {title: "", duration: "", genre: "", description: "", trailer: ""}}

handleSubmit = () => {
  const {video} = this.state
  const {user_id} = this.props
  axios.post(`/api/users/${user_id}/videos`)
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({video: {...this.state.video, [name]: value}})
}


render() {
  return (
    <Form>
      <Form.Input 
      name="title"
      value={this.state.title}
      placeholder= "Title"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name="genre"
      value={this.state.genre}
      placeholder= "Genre"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name="description"
      value={this.state.description}
      placeholder= "Description"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name= "trailer"
      value={this.state.trailer}
      placeholder= "Copy/Paster URL here"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name="duration"
      value={this.state.title}
      placeholder= "Duration"
      number
      onChange = {this.handleChange}
      />
    </Form>
  )}

}

export default VideoForm;