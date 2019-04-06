import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Header, Grid } from 'semantic-ui-react';
import axios from "axios";
import { Link, withRouter, } from 'react-router-dom'



class Home extends React.Component {
  state = {videos: [], moble: false}

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
   
    this.setState({...this.props.auth.user})
    axios.get(`api/users/${this.props.auth.user.id}/videos`)
    .then( res => {
      console.log(res)
      this.setState({videos: [...res.data]})
    })
  }

  resize() {
    if (window.innerWidth <= 760) {
        this.setState({moble: true});
      }
      else
      this.setState({moble: false});
}

  isMobileDevice() {
    if(typeof window.orientation !== "undefined" || (navigator.userAgent.indexOf('IEMobile') !== -1)){
      this.setState({moble: true})
    }
    else{
      this.setState({moble: false})
    }
  };

  render(){
    return(
      <Grid centered>
      <Grid.Row columns={this.state.moble ? 2 : 5}>
      {
        this.state.videos.map(v =>(
          <Grid.Column style={{marginBottom: "50px"}}>
        <div style={{marginBottom:"5px",width: "200", height: "100", borderRadius: "10px", }} >
          <iFrame 
          width="200" 
          height="100" 
          src={v.trailer} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          />
          </div>
          <Link user_id={this.state.id} id={v.id} to={`/users/${this.state.id}/videos/${v.id}`}>
          <Header style={{marginTop:"3px"}}>{v.title}</Header>
          </Link>
        </Grid.Column>
         ))
        }
        </Grid.Row>
          </Grid>
    )}
      }

export class ConnectedHome extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Home { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedHome);

