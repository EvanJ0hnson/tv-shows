import React from 'react';

import withPagination from '../withPagination/withPagination'

import Show from '../Show/Show';

import './List.css'

function List({ items, emptyMessage = 'Empty List' }) {
  const listItems = items.length
    ? items.map(item =>
        <li className="list__item" key={item.id}>
          <Show item={item} />
        </li>
      )
    : <p>{emptyMessage}</p>;

  return (
    <ul className="list">
      {listItems}
    </ul>
  );
}

export default withPagination(List);
