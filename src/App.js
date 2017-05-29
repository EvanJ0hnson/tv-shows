import React, { Component } from 'react';

import AddShow from './AddShow/AddShow';
import OnAir from './OnAir/OnAir';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TV Shows</h1>
        </header>

        <main>
          <OnAir />
          <AddShow />
        </main>

        <footer>
          <h6>Ivan Gerasimov, <a href="https://gerasimov.pw">gerasimov.pw</a></h6>  
        </footer>
      </div>
    );
  }
}

export default App;
