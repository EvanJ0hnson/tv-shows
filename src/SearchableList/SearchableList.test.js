import React from 'react';
import ReactDOM from 'react-dom';

import SearchableList from './SearchableList';

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

it('<SearchableList> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchableList items={items} />, div);
});
