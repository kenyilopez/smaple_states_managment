import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SampleXsate } from "./xstate_test";
import { MobxSample } from "./mobx-test";
import { RematchTest } from "./rematch-test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SampleXsate></SampleXsate>
        <MobxSample></MobxSample>
        <RematchTest></RematchTest>
      </header>
    </div>
  );
}

export default App;
