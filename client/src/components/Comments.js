import React from 'react';
import { Segment, Image, Button, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import CommentForm from './CommentForm'
import EditComment from './EditComment'

class Comments extends React.Component {
  state = { comments: [], showForm: false }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.video_id}/comments`)
    .then( res => this.setState({ comments: res.data, })
    )
  }

  updateComments = (comment) => {
    this.setState({ comments: [comment, ...this.state.comments]})
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})
  

  render() {
    const { comments, showForm } = this.state;
    return (
      <>
      <CommentForm video_id={this.props.video_id} user_id={this.props.user_id} updateComments={this.updateComments}/>
        <Segment.Group>
          {comments.map(comment => (
            <>
              <Segment key={comment.id}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                  <Image src='https://i.imgur.com/XLErQNQ.png' avatar />
                  {comment.body} 
                </div>
                <div>
                  <Button icon color="blue" onClick={this.toggleForm}><Icon name="pencil" /></Button>
                </div>
                </div>
              </Segment>
              {showForm && <EditComment {...comment} c_id={comment.id} v_id={this.props.video_id} updateComments={this.updateComments}/>}
            </>
          ))}
        </Segment.Group>
      </>
    )
  }
}
export default Comments;
