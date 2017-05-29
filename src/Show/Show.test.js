import React from 'react';
import ReactDOM from 'react-dom';

import Show from './Show';

const item = {
  title: 'Item 1',
  plot: 'plot…',
  prev: 'prev',
  next: 'next',
};

it('<Show> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Show item={item} />, div);
});
