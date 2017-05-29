import React, { Component } from 'react';
import SearchableList from '../SearchableList/SearchableList';

const title = 'Add Show';
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

        <SearchableList items={items} />
      </div>
    );
  }
}

export default AddShow;
