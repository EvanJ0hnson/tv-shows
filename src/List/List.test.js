import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

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

it('<List> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List items={items} />, div);
});
