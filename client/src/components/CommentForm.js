import React from 'react'
import { Form, Image, Button, Icon, } from 'semantic-ui-react';
import axios from 'axios';

class CommentForm extends React.Component {
  state = { body: "", }

  handleChange = (e) => {
    const { name, value, } =  e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    const comment = { body: this.state.body, video_id: this.props.video_id, user_id: this.props.user_id}
    axios.post(`/api/videos/${this.props.video_id}/comments`, comment)
      .then( res => console.log(res))
      .catch( err => console.log(err))
    this.setState( {body: ""})
    this.props.updateComments(comment)

  }

  render() {
    return (
      <div style={{display: "flex", alignItems: "center"}}>
      <Image src='https://i.imgur.com/XLErQNQ.png' avatar />
      <Form  style={{textAlign: "center", width: "100%"}}>
        <Form.TextArea
          placeholder="Add a public comment"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}

        />
      </Form>
      <Button icon onClick={this.handleSubmit} color="red"><Icon name="send" /></Button>
      </div>
    )
  }
}
export default CommentForm