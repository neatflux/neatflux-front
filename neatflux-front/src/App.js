import React, { Component } from 'react';
import './styles/css/head.css';

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      
      <div className="App" >
            <Navbar />
             {/* <div className="middle" /> 
             <div className="footer" />
            <button className="button is-link">Plop </button> */}

       </div>

    );
  }
}

export default App;
