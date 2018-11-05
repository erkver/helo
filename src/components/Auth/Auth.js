import React,{ Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/reducer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Auth.scss"

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  addUser = () => {
    const { username, password } = this.state;
    axios.post('/api/register', { username, password }).then(res => {
      console.log(res);
      const { data } = res.value;
      const { getUserInfo } = this.props;
      getUserInfo(data.username, data.id, data.profilePic);
      this.props.history.push('/dashboard');
    })
  }

  getUser = () => {
    const { username, password } = this.state;
    axios.post('/api/login', { username, password }).then(res => {
      console.log(res);
      const { data } = res.value;
      const { getUserInfo } = this.props;
      getUserInfo(data.username, data.id, data.profilePic);
      this.props.history.push('/dashboard');
    })
  }

  render() {
    console.log(this.props);
    const { username, password } = this.state;
    return (
      <div className="auth-cont">
        <form className="form-cont" onSubmit={this.addUser}>
          <h1>Helo</h1>
          <FontAwesomeIcon icon={["far", "smile-wink" ]} style={{"color": "white"}} />
          <input onChange={e => this.setState({username: e.target.value})} type="text" value={username} placeholder="Username" />
          <input onChange={e => this.setState({password: e.target.value})} type="text" value={password} placeholder="Password" />
          <button type="submit">Register</button>
          <button onClick={this.getUser}>Login</button>
        </form>
      </div>
    )
  }
}


export default connect(getUserInfo)(Auth);