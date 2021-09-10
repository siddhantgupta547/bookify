import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Navbar, Cart } from ".";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
