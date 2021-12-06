import React from 'react';
import cl from './Card.module.scss';

const Card = ({ name, price, img, onPlus, onFavorite }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ name, price, img });
    setIsAdded(!isAdded);
  };

  return (
    <div className={cl.card}>
      <div className={cl.favorite} onClick={onFavorite}>
        <img src="/img/unliked.svg" alt="heart-unliked" />
      </div>
      <img width={133} height={112} src={img} alt="Sneaker" />
      <h5>{name}</h5>
      <div className={'d-flex justify-between align-center mt-15'}>
        <div className={'d-flex flex-column '}>
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>

        <img
          className={cl.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
};

export default Card;
