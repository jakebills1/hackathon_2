import React from 'react';
import {Container, Button, Header, Icon} from 'semantic-ui-react';
import axios from 'axios'

class VideoPlayer extends React.Component {
  state = {
    video: {},
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.user_id}/videos/${this.props.id}`)
    .then(res => {
      this.setState({video: res.data})
    });
}

  upvote = (id) => {
    const { videos, } = this.state;
    axios.put(`/api/videos/${this.props.id}`)
      .then( () => this.setState({ videos: videos.filter( c => c.id !== id ), }) )
  }

  downVote = (id) => {
    const { videos, } = this.state;
    this.setState({ videos: videos.filter( c => c.id !== id ), });
  }
  
  render(video){
    return(
      
        <Container>
          <Header as='h1'/>
          {/* <Header href="https://youtu.be/OczABLYxDqo?list=RDOczABLYxDqo"/> */}
          <title>{video}</title>

            <p>Vote On This Video</p>
            <Button color="green" icon basic onClick={() => this.upvote(video.id)}>
              <Icon name="thumbs up" />
            </Button>
            <Button color="red" icon basic onClick={() => this.downVote(video.id)}>
              <Icon name="thumbs down" />
            </Button>
        </Container>
    )
     }
  }
    
export default VideoPlayer;