import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.scss"

function Nav (props) {
  const { pathname } = props.location;
  console.log(props);
  return (
    <div className="nav-cont" style={pathname === '/' ? {display: "none"} : null}>
      <div className="top-nav">
        <img src={props.profilePic} alt={props.username} className="pic-cont" />
        <p>{props.username}</p>
        <FontAwesomeIcon icon="home" className="nav-icon" />
        <FontAwesomeIcon icon={["far", "file-alt"]} className="nav-icon" />
      </div>
      <FontAwesomeIcon icon="power-off" className="nav-icon" style={{"marginBottom": "20%"}} />
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);