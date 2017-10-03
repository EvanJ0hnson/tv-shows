import React from 'react';
import PropTypes from 'prop-types';
import SearchableList from '../SearchableList/SearchableList';

const title = 'Add Show';

const AddShow = ({ items }) => (
  <div>
    <h2>{title}</h2>

    <SearchableList items={items} />
  </div>
);

AddShow.propTypes = {
  items: PropTypes.array.isRequired,
};

export default AddShow;
