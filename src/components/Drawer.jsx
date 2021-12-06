import React from 'react';

const Drawer = ({ onClose, items = [] }) => {
  console.log(items);
  return (
    <div className={'overlay'}>
      <div className={'drawerBlock'}>
        <h2 className={'mb-30 d-flex justify-between'}>
          Корзина{' '}
          <img
            className={'removeBtn cu-p'}
            src="/img/btn-remove.svg"
            alt="btn-remove"
            onClick={onClose}
          />
        </h2>
        <div className={'items'}>
          {items.map((obj) => (
            <div className={'cart-item d-flex align-center mb-20'}>
              <img className={'mr-20'} width={70} height={70} src={obj.img} alt="Sneaker" />
              <div className={'mr-20'}>
                <p className={'mb-5'}>{obj.name}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className={'removeBtn'} src="/img/btn-remove.svg" alt="btn-remove" />
            </div>
          ))}
        </div>

        <div className={'cartTotalBlock'}>
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>20 000 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1000 руб.</b>
            </li>
          </ul>
          <button className={'greenBtn'}>
            Оформить заказ <img src="/img/arrow.svg" alt="arrowbtn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
