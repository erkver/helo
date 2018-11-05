import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

export default (
  <div style={{height: "100%", width: "100%"}}>
  <Route component={Nav} />
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/post/:postid" exact component={Post} />
      <Route path="/new" exact component={Form} />
    </Switch>
  </div>
);