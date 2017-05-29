import React from 'react';

import './Show.css';

function Show({ item }) {
  return (
    <div className="tv-show-card">
      <header>
        <h3>{item.title}</h3>
      </header>

      <main>
        <img
          className="tv-show-card__poster"
          src={item.image}
          alt={`Poster: ${item.title}`}
          width="85px"
          height="125px"
          title={item.title}
        />

        <p>{item.plot}</p>
        <p>
          <span>Last Episode:</span> {item.next}
        </p>
        <p>
          <span>Next Episode:</span> {item.prev}
        </p>
        <button
          className="tv-show-card__button"
          title={`Add ${item.title} to the list`}
        >+</button>
      </main>
    </div>
  )
}

export default Show;
