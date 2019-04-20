import React, { Component } from 'react';
import './App.css';
import everlane from './everlane.js';
import reformation from './reformation.js';
import outdoorvoices from './outdoorvoices.js';
import able from './able.js';
import uncle from './uncle.js';
import eileenfisher from './eileenfisher.js';
import peopletree from './peopletree.js';
import matter from './matter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h3 className="headtop">the</h3>
      <h1 >sustainable fashion</h1>
      <h3 className="headbottom">index</h3>
      <br></br>
      <h5>featured brands:</h5>
      <button className="button" onClick= "<everlane />" >Everlane</button>
      <button className="button" onClick  >Reformation</button>
      <button className="button" onClick  >Outdoor Voices</button>
      <button className="button" onClick  >Able</button>
      <button className="button" onClick  >Uncle</button>
      <button className="button" onClick  >EILEEN FISHER</button>
      <button className="button" onClick  >People Tree</button>
      <button className="button" onClick  >MATTER</button>
      </div>
    );
  }
}

export default App;


