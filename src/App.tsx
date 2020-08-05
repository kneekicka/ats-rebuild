import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Search from "./Containers/Search/Search";
import NavBar from "./Components/Navbar/Navbar";
import Job from "./Containers/Job/Job";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <NavBar showSearch={true}></NavBar>
            <Search />
          </Route>
          <Route path="/job">
            <NavBar showSearch={false}></NavBar>
            <Job />
          </Route>
          <Route path="/">
            <NavBar showSearch={true}></NavBar>
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
