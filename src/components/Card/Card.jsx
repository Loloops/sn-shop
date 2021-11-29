import React from 'react';
import cl from './Card.module.scss';

const Card = ({ name, price, img, onClick }) => {
  return (
    <div className={cl.card}>
      <div className={cl.favorite}>
        <img src="/img/unliked.svg" alt="heart-unliked" />
      </div>
      <img width={133} height={112} src={img} alt="Sneaker" />
      <h5>{name}</h5>
      <div className={'d-flex justify-between align-center mt-15'}>
        <div className={'d-flex flex-column '}>
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button className={'button'} onClick={onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
