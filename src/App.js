import React, { Component } from "react";
import "./App";
import Sidebar from "./Components/Sidebar";
// import Introduction from "./components/introduction";
import About from "./Components/About";
// import Timeline from "./components/timeline";
import Projects from "../src/Components/Portfolio";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            {/* <Introduction></Introduction> */}
            <About></About>
            <Projects></Projects>
            {/* <Timeline></Timeline> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
