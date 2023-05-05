import "../App.css";
import Uploadfile from "../components/uploadfile";
import React, { useState } from "react";
import Head from "../components/head";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Head />
      <div class="container text-center">
        <Uploadfile />
      </div>
    </div>
  );
}

export default App;
