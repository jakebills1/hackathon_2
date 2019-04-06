import React from 'react';
import {Container, Button,} from 'semantic-ui-react';
import axios from 'axios'

class Video_Player extends React.Component {
  state = {
    video = "",
    title = "",
    duration = "",
    genre = "",
  };

  componentDidMount() {
    axios.get(`/api/user.${id}`)
    .then(res => {
      this.setState{video: id}
    });
}


  }

  upvote = (id) => {
    const { videos, } = this.state;
    axios.put(`/api/videos/${id}`)
      .then( () => this.setState({ videos: videos.filter( c => c.id !== id ), }) )
  }

  downVote = (id) => {
    const { videos, } = this.state;
    this.setState({ videos: videos.filter( c => c.id !== id ), });
  }
  
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const comment = { ...this.state, };
  //   const { closeForm, dispatch, } = this.props;
  //   const func = this.props.id ? updateComment : addComment;
  //   dispatch(func(comment));
  //   closeForm();
  // }
    

  render()
    return{
      
        <Container>
          <Header as='h1'/>
          // <Header as='href'/>
          <Title>{video_player}</Title>

            <p>Rock & Or Roll!</p>
            <Button color="green" icon basic onClick={() => this.upvote(video.id)}>
              <Icon name="thumbs up" />
            </Button>
            <Button color="red" icon basic onClick={() => this.downVote(video.id)}>
              <Icon name="thumbs down" />
            </Button>
            // <div>
            // <Form onSubmit={this.handleSubmit}>
            // <Form.Input
            // name="title"
            // required
            // defaultValue={title}
            // onChange={this.handleChange}
            // label="Title"
            // />
            // <Form.Input
            // name="duration"
            // defaultValue={duration}
            // onChange={this.handleChange}
            // label="Duration"
            // />
            // <Form.Input
            // name="genre"
            // defaultValue={genre}
            // onChange={this.handleChange}
            // label="Genre"
            // />
          // </div>
        </Container>

    }
    
}
export default Video_Player