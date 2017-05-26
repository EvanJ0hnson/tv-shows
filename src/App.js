import React, { Component } from 'react';

import List from './List/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TV Shows</h1>
        </header>
        
        <List title='OnAir' items={[1, 2, 3, 4]} />
        <List title='Add Show' items={[1, 2, 3, 4]} />
      </div>
    );
  }
}

export default App;
