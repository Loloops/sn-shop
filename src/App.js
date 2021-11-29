import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className={'content p-40'}>
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className={'input-block d-flex align-center'}>
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className={'d-flex'}>
          <Card
            name={'Мужские Кроссовки Nike Blazer Mid Suede'}
            price={'12 999'}
            img={'img/sneakers/1.jpg'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
