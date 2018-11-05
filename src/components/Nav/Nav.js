import React from "react";
import { connect } from "react-redux";

function Nav (props) {
  const { pathname } = props.location;
  console.log(props);
  return (
    <div style={pathname === '/' ? {display: "none"} : null}>Nav</div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);