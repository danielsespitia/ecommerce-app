import React from 'react';

import './index.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container" data-testid="card-container">
      <img
        data-testid="card-image"
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2 data-testid="card-name">{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
