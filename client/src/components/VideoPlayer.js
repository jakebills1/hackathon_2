import React from 'react';
import {Container, Button, Header, Icon} from 'semantic-ui-react';
import CommentForm from './CommentForm'
import Comments from './Comments'
import axios from 'axios'

class VideoPlayer extends React.Component {
  state = {
    video: {},
  };

  componentDidMount() {
const {user_id, id} = this.props.match.params 
    axios.get(`/api/users/${user_id}/videos/${id}`)
    .then(res => {
      this.setState({video: res.data})
  
    });
}

  like = () => {
    const {video} = this.state
    const {user_id, id} = this.props.match.params
    this.setState({video: {...this.state.video, 
      likes: this.state.video.likes + 1}})
    axios.put(`/api/users/${user_id}/videos/${id}`, video)
  }
      

  dislike = () => {
    const {video} = this.state
    const {user_id, id} = this.props.match.params
    this.setState({video: {...this.state.video, 
      dislikes: this.state.video.dislikes + 1}})
      axios.put(`/api/users/${user_id}/videos/${id}`, video)
   
  }
  
  filterVideo = () => {
    const {videos} = this.state;
    videos.map(g => (
<Dropdown.Item>{g.genre}</Dropdown.Item>
    )
    )
  }

  render() {
    const {title, duration, description, genre, trailer} = this.state.video
    return(
      <>
        <Container styles={{marginTop: "30px"}}>
          <Header>
          {title} 
          </Header>
          <iFrame   width="100%" 
          height="350px" 
          src={trailer} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen

          />

            <p>Vote On This Video</p>
            <Button color="green" icon basic
            icon="thumbs up"
            label={{ as: 'a', basic: true, content: this.state.video.likes }}
            labelPosition='right'
            onClick={()=>this.like()}>
              <Icon name="thumbs up" />
            </Button>
            <Button color="red" icon basic
            icon="thumbs down"
            label={{ as: 'a', basic: true, content: this.state.video.dislikes }}
            labelPosition='right'
            onClick={()=>this.dislike()}>
           
            </Button>
            <Dropdown text="genre">
              <Dropdown.Menu>
                {this.filterVideo}
              </Dropdown.Menu>
            </Dropdown>

            <CommentForm video_id={this.props.match.params.id} user_id={this.props.match.params.user_id}/>
            <Comments video_id={this.props.match.params.id} user_id={this.props.match.params.user_id}/>
        </Container>
        </>
      )
     }
  }
    
export default VideoPlayer;