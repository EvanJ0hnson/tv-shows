import React from 'react';
import SearchableList from '../SearchableList/SearchableList';

const title = 'Add Show';

const AddShow = ({ items }) => (
  <div>
    <h2>{title}</h2>

    <SearchableList items={items} />
  </div>
);

export default AddShow;
