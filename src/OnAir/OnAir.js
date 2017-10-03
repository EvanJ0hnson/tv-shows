import React from 'react';
import PropTypes from 'prop-types';

import List from '../List/List'

const title = 'OnAir';

const OnAir = ({ items }) => (
  <div>
    <h2>{title}</h2>

    <List items={items} />
  </div>
);

OnAir.propTypes = {
  items: PropTypes.array.isRequired,
};

export default OnAir;
