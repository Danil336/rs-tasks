import { Card } from 'pages/Home';
import React from 'react';
import './productCard.scss';

export const MyPrCard = (props: Card) => {
  return (
    <div className="product_card">
      <div className="card_content">
        <div className="card_image">
          <img src={props.image} alt="" />
        </div>
        <div className="card_title">{props.title}</div>
        <div className="card_price">{props.price}</div>
        <div className="card_description">{props.description}</div>
      </div>
    </div>
  );
};
