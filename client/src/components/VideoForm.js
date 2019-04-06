import React from "react";
import {Form, Button} from "semantic-ui-react"
import axios from "axios"

class VideoForm extends React.Component {
state= {video: {title: "", duration: "", genre: "", description: "", trailer: ""}}

handleSubmit = (e) => {
  const {video} = this.state
  axios.post(`/api/users/${this.props.user_id}/videos`, video)
  this.props.toggle()
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
      value={this.state.video.title}
      placeholder= "Title"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name="genre"
      value={this.state.video.genre}
      placeholder= "Genre"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name="description"
      value={this.state.video.description}
      placeholder= "Description"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name= "trailer"
      value={this.state.video.trailer}
      placeholder= "Copy/Paster URL here"
      onChange = {this.handleChange}
      />
      <Form.Input 
      name="duration"
      value={this.state.video.title}
      placeholder= "Duration"
      number
      onChange = {this.handleChange}
      />
      <Button onClick={this.handleSubmit}>Save</Button>
    </Form>
  )}

}

export default VideoForm;