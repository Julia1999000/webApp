import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "../pages/content";
import About from "../pages/about";
import OneNews from "../pages/oneNews";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div className="site">
            <div className="bg">
              <Route
                path="/onenews:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <OneNews id={id} />;
                }}
                exact
              />
              <Route path="/" exact component={Content} />
            </div>
            <Route path="/about" component={About} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
