import React from 'react'
import VideoForm from "./VideoForm"
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Image, Dropdown, Button} from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  state= {toogle: false}

  toggle = () =>{
    this.setState({toogle: !this.state.toogle})
  }

  Form = () =>{
    if(this.state.toogle)
    return(
      <VideoForm user_id={this.props.auth.user.id}/>
    )
  }

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Dropdown icon={<img alt='logo' width="32" height="32" style={this.state.toogle ? {marginRight:"61px", marginTop:"10px", borderRadius:"50px"} : {marginRight:"25px", marginTop:"10px", borderRadius:"50px"}} src='https://imgur.com/HTsTTzg.png'/>}>
            <Dropdown.Menu style={{marginRight:"100px",}}>
            <Dropdown.Item onClick={() => handleLogout(this.props.history)} text='Logout'>
            </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{marginRight:"100px", marginTop:"10px"}}>
          <Button color="red" size="tiny" onClick={() => this.toggle()}> {this.state.toogle ? "Cancel" : "Upload Video" }</Button>
          </div>
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
        <Dropdown icon={<img alt='logo' width="32" height="32" style={{marginRight:"100px", marginTop:"10px", borderRadius:"50px"}} src='https://imgur.com/HTsTTzg.png'/>}>
        <Dropdown.Menu style={{marginRight:"75px",}}>
          <Dropdown.Item href={`/register`} text='Register'>
          </Dropdown.Item>
          <Dropdown.Item text='Login' href={`/login`}/>
        </Dropdown.Menu>
      </Dropdown>
        </Menu.Menu>
          )}
      }
  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
          <Image src='https://imgur.com/ID0zLWh.png' size='small' style={{marginLeft: "70%"}} />
          </Link>
            { this.rightNavItems() }
        </Menu>
        {this.Form()}
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
