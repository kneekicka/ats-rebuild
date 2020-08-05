import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Containers/Search/Search";
import NavBar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Search></Search>
    </div>
  );
};

export default App;
