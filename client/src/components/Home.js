import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Header, Grid } from 'semantic-ui-react';
import axios from "axios";
import { Link, withRouter, } from 'react-router-dom'



class Home extends React.Component {
  state = {quad:[], rand:{}, videos: [], moble: false,}

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.setState({...this.props.auth.user})
    axios.get(`api/users/${this.props.auth.user.id}/videos`)
    .then( res => {
      console.log(res)
      this.setState({quad: res.data.splice(4, res.data.length), rand: res.data[Math.floor(Math.random()*res.data.length)], videos: res.data.splice(0, 4)})
    })
    
  }

  resize() {
    if (window.innerWidth <= 860) {
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
    if(this.state.moble){
      return(<Grid centered>
      <Grid.Row columns={this.state.moble ? 2 : 5}>
      {
        this.state.quad.map(v =>(
          <Grid.Column style={{marginBottom: "50px"}}>
        <div style={{marginBottom:"5px",width: "100", height: "50", borderRadius: "10px", overflow: "hidden" }} >
          <iframe 
          width="100%" 
          height="100%" 
          src={v.trailer} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          />
          </div>
          <Link user_id={this.state.id} id={v.id} to={`users/${this.state.id}/videos/${this.state.id}`}>
          <Header style={{marginTop:"3px"}}>{v.title}</Header>
          </Link>
        </Grid.Column>
         ))
        }
        </Grid.Row>
          </Grid>

      )}
    else{
    return(
      <div>
      <div style={{display:"flex", height: "500px", justifyContent: "start",}}>
        <div style={{marginBottom: "0px" , height: "200px"}}>
        <p style={{marginTop: "25px", fontSize: "25px"}}>All Videos</p>
          <div>
            <div style={{marginBottom:"5px",width: "662px", height: "362px", backgroundColor: "black", borderRadius: "10px", overflow: "hidden" }} >
            <iframe width="665" height="365" src={this.state.rand.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          <Header style={{marginTop:"15px"}}>{this.state.rand.title}</Header>
        </div>
        </div>
      <div style={{marginLeft: "25px", marginTop:"85px", marginBottom:"0px", paddingBottom:"0px", height: "200px", }}>
      <Grid centered>
      <Grid.Row columns={this.state.moble ? 2 : 2}>
      {
        this.state.videos.map(v =>(
          <Grid.Column style={{marginBottom: "0px"}}>
        <div style={{marginBottom:"5px",width: "100", height: "50", borderRadius: "10px", overflow: "hidden" }} >
          <iframe 
          width="100%" 
          height="100%" 
          src={v.trailer} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          />
          </div>
          <Link user_id={this.state.id} id={v.id} to={`users/${this.state.id}/videos/${this.state.id}`}>
          <Header style={{marginTop:"3px"}}>{v.title}</Header>
          </Link>
        </Grid.Column>
         ))
        }
        </Grid.Row>
          </Grid>
        </div>
        </div>
        <Grid centered>
      <Grid.Row columns={this.state.moble ? 2 : 5}>
      {
        this.state.quad.map(v =>(
          <Grid.Column style={{marginBottom: "50px"}}>
        <div style={{marginBottom:"5px",width: "100", height: "50", borderRadius: "10px", overflow: "hidden" }} >
          <iframe 
          width="100%" 
          height="100%" 
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
        </div>
        

    )}  }  
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

