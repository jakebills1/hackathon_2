import React from 'react';
import { Segment, Image, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import CommentForm from './CommentForm'

class Comments extends React.Component {
  state = { comments: [], }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.video_id}/comments`)
    .then( res => this.setState({ comments: res.data, })
    )
  }

  updateComments = (comment) => {
    this.setState({ comments: [comment, ...this.state.comments]})
  }
  
  handleDelete = (id) => {
   axios.delete(`/api/videos/${this.props.video_id}/comments/${id}`).then( res => 
    this.setState({comments: this.state.comments.filter(c => c.id !== id)
    }))
  }

  render() {
    const { comments, } = this.state;
    return (
      <>
      <CommentForm video_id={this.props.video_id} user_id={this.props.user_id} updateComments={this.updateComments}/>
        <Segment.Group>
          {comments.map(comment => (
            <Segment key={comment.id}>
          
            <Image src='https://i.imgur.com/XLErQNQ.png' avatar />
            {comment.body} 
            <Button icon = "trash"  onClick={() => this.handleDelete(comment.id)}></Button>
            </Segment>
          ))}
        </Segment.Group>
      </>
    )
  }
}
export default Comments;