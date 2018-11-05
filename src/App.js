import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import './App.scss';

library.add(far, faSmileWink);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div style={{ height: "100%", width: "100%" }}>
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
