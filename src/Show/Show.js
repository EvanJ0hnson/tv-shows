import React from 'react';
import { connect } from 'react-redux';

import './Show.css';

/**
 * @exports
 */
export const Show = ({ handleAddShow, item }) => {
  return (
    <div className="tv-show-card">
      <header>
        <h3>{item.name}</h3>
      </header>

      <main>
        <img
          className="tv-show-card__poster"
          src={item.image && item.image.medium}
          alt={`Poster: ${item.name}`}
          width="85px"
          height="125px"
          title={item.name}
        />

        <div className="tv-show-card__summary-wrapper">
          <p
            className="tv-show-card__summary"
            dangerouslySetInnerHTML={{ __html: item.summary }}
          ></p>
        </div>
        <p>
          {item.schedule.time} <span>@</span> {item.schedule.days[0]} 
        </p>
        <p>
          <span>Last Episode:</span> {item.next}
        </p>
        <p>
          <span>Next Episode:</span> {item.prev}
        </p>
        <button
          className="tv-show-card__button"
          title={`Add ${item.title} to the list`}
          onClick={handleAddShow}
        >+</button>
      </main>
    </div>
  )
}

/**
 * @exports default
 */
export default connect(
  null,
  (dispatch, ownProps) => ({
    handleAddShow: () => dispatch({ type: 'ADD_SHOW', payload: ownProps.item }),
  })
)(Show);
