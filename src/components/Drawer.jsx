import React from 'react';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className={'overlay'}>
      <div className={'drawerBlock'}>
        <h2 className={'mb-30 d-flex justify-between'}>
          Корзина <img className={'removeBtn cu-p'} src="/img/btn-remove.svg" alt="btn-remove" />
        </h2>
        <div className={'items'}>
          <div className={'cart-item d-flex align-center mb-20'}>
            <img
              className={'mr-20'}
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneaker"
            />
            <div className={'mr-20'}>
              <p className={'mb-5'}>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={'removeBtn'} src="/img/btn-remove.svg" alt="btn-remove" />
          </div>
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
