import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
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
  

  render() {
    const { comments, } = this.state;
    return (
      <>
      <CommentForm video_id={this.props.video_id} user_id={this.props.user_id} updateComments={this.updateComments}/>
        <Segment.Group>
          {comments.map(comment => (
            <Segment key={comment.id}>

            <Image src='https://i.imgur.com/XLErQNQ.png' avatar />
            {comment.body} </Segment>
          ))}
        </Segment.Group>
      </>
    )
  }
}
export default Comments;