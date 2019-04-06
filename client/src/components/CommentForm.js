import React from 'react'

class CommentForm extends React.Component {
  state = { body: "", }

  handleChange = (e) => {
    const { name, value, } =  e.target;
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    debugger
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          placeholder="Add a public comment"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}

        />
      </Form>
    )
  }
}
export default CommentForm