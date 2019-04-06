import React from 'react';
import { Segment } from 'semantic-ui-react';
import axios from 'axios';

class Comments extends React.Component {
  state = { comments: [], }
  componentDidMount() {
    axios.get(`/api/videos/${this.props.video_id}/comments`)
    .then( res => this.setState({ comments: res.data, })
    )
  }

  render() {
    const { comments, } = this.state;
    return (
      <Segment.Group>
        {comments.map(comment => (
          <Segment key={comment.id}>{comment.body}</Segment>
        ))}
      </Segment.Group>
    )
  }
}
export default Comments;