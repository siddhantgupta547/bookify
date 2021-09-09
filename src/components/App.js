import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { home, Navbar } from ".";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
