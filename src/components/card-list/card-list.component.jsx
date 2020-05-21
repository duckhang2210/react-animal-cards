import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (
  <div className='card-list'>
    {props.villagers.map((villager) => (
      <Card key={villager.id} villager={villager} />
    ))}
  </div>
);
