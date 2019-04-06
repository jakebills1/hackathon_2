import React from 'react'
import { Form, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
class EditComment extends React.Component {
  state = { body: ""}

  componentDidMount() {
    this.setState({ body: this.props.body})
  }

  handleChange = (e) => {
    this.setState({ body: e.target.value})
  }
  handleSubmit = (e) => {
    const { c_id, v_id, } = this.props;
    e.preventDefault();
    const comment = {...this.state};
    axios.put(`/api/videos/${v_id}/comments/${c_id}`, comment)
      .then( res => console.log(res))
    // this.props.updateComments(comment)
  }
  render() {
    return (
      <>
      <Header>Edit Your Comment</Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
      <Button>Submit</Button>
      </Form>
      </>
    )
  }
}
export default EditComment;