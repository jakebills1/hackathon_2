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
    // axios.put(`/api/users/${user_id}/videos/${id}`, video)
  }
      

  // dislike = (id) => {
    // this.setState({video: {...this.state.video, 
    //   likes: this.state.video.likes - 1}})
  //   const { video } = this.state;
  //   this.setState({ videos: videos.filter( c => c.id !== id ), });
  // }
  
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const comment = { ...this.state, };
  //   const { closeForm, dispatch, } = this.props;
  //   const func = this.props.id ? updateComment : addComment;
  //   dispatch(func(comment));
  //   closeForm();
  // }
    

  render() {
    const {title, duration, description, genre, trailer} = this.state.video
    return(
      
        <Container>
          <Header as='h1'/>
          <title>{title}</title>
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
            labelPosition='right'>
           
            </Button>
            {/* <CommentForm video_id={this.props.match.params.id} user_id={this.props.match.params.user_id}/> */}
            <Comments video_id={this.props.match.params.id} user_id={this.props.match.params.user_id}/>
        </Container>
    )
     }
  }
    
export default VideoPlayer;