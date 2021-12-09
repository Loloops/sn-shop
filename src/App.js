import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    axios('https://61ae009ca7c7f3001786f543.mockapi.io/items').then((res) => setItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {isOpened && <Drawer onClose={() => setIsOpened(false)} items={cartItems} />}
      <Header onClickCart={() => setIsOpened(true)} />
      <div className={'content p-40'}>
        <div className="mb-40 d-flex align-center justify-between">
          <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
          <div className={'input-block d-flex align-center'}>
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue} />
          </div>
        </div>
        <div className={'cardWrapper d-flex'}>
          {items.map((item) => (
            <Card
              key={item.id}
              name={item.title}
              price={item.price}
              img={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
