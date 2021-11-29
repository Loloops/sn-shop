import React from 'react';

const Card = ({ name, price, img }) => {
  return (
    <div className={'card'}>
      <div className={'favorite'}>
        <img src="/img/unliked.svg" alt="heart-unliked" />
      </div>
      <img width={133} height={112} src={img} alt="Sneaker" />
      <h5>{name}</h5>
      <div className={'d-flex justify-between align-center mt-15'}>
        <div className={'d-flex flex-column '}>
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button className={'button'}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
