import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flippable, FlipAxis } from './stories/Flippable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flippable width="200px" height="200px"
          axis={FlipAxis.XAxis}
          front={<img src={logo} className="App-logo" alt="logo" />}
          back={<div style={{ backgroundColor: "red" }} />}
          timeToFlipInMilliseconds={1000}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
