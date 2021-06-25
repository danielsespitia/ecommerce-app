import React from 'react';

import { Card } from '../../atoms';
import './index.styles.css';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {!!props.monsters &&
        props.monsters.map((monster) => (
          <Card monster={monster} key={monster.id} />
        ))}
    </div>
  );
};
