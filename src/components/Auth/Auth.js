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

  addUser = e => {
    const { username, password } = this.state;
    axios.post('/api/register', { username, password }).then(res => {
      console.log(res);
      const { getUserInfo } = this.props;
      getUserInfo(res.data.username, res.data.id, res.data.profilePic);
      this.props.history.push('/dashboard');
    });
    e.preventDefault();
  }

  getUser = () => {
    const { username, password } = this.state;
    axios.post('/api/login', { username, password }).then(res => {
      console.log(res);
      const { getUserInfo } = this.props;
      getUserInfo(res.data.username, res.data.id, res.data.profilePic);
      this.props.history.push('/dashboard');
    })
  }

  render() {
    console.log(this.props);
    const { username, password } = this.state;
    return (
      <div className="auth-cont">
        <form className="form-cont" onSubmit={this.addUser}>
          <FontAwesomeIcon icon={["far", "smile-wink" ]} className="dash-icon" />
          <h1>Helo</h1>
          <div className="input-cont">
            <label>Username:</label>
            <input 
              onChange={e => this.setState({username: e.target.value})} 
              type="text" 
              required
              value={username} 
              placeholder="Username" />
          </div>
          <div className="input-cont">
            <label>Password:</label>
            <input 
              onChange={e => this.setState({password: e.target.value})} 
              type="text" 
              value={password}
              required 
              placeholder="Password" />
          </div>
          <div className="btn-cont">
            <button onClick={this.getUser}>Login</button>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUserInfo})(Auth);