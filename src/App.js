import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <Nav></Nav>

      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;


