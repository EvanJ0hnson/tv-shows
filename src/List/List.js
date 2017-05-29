import React from 'react';

function List({ items, emptyMessage = 'Empty List' }) {
  const listItems = items.length
    ? items.map(x => <li key={x.title}>{x.title}</li>)
    : <p>{emptyMessage}</p>;

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default List;
