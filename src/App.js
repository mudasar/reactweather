import React, { Component } from 'react';

import './App.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <div className="clearfx"></div>
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default App;
