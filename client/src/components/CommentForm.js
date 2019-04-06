import React from 'react'
import { Form, Image, Button, Icon, } from 'semantic-ui-react'

class CommentForm extends React.Component {
  state = { body: "", }

  handleChange = (e) => {
    const { name, value, } =  e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    const comment = { body: this.state.body, video_id: "", user_id: ""}
    debugger
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