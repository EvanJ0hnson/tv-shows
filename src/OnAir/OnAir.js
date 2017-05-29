import React, { Component } from 'react';
import List from '../List/List'

const title = 'OnAir';
const items = [{
  title: 'Item 1',
  plot: 'plot…',
  prev: 'prev',
  next: 'next',
}, {
  title: 'Item 2',
  plot: 'plot…',
  prev: 'prev',
  next: 'next',
}];

class AddShow extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>{title}</h2>
        </header>

        <List items={items} />
      </div>
    );
  }
}

export default AddShow;
