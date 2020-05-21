import React from 'react';
import './card.style.css';

export const Card = (props) => (
  <div className='card-container'>
    <img
      alt='villager'
      src={`https://robohash.org/${props.villager.id}?set=set2&size=180x180`}
    />
    <h2> {props.villager.name} </h2>
    <p> {props.villager.email} </p>
  </div>
);
