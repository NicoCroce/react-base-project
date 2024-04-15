import { useState } from 'react';
import { Main } from './Components/Main/Main';
import { Navbar } from './Components/Navbar/Navbar';
import './App.css';

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={`layout ${menu && 'menu__is-open'}`}>
      {/* <Header /> */}
      <button className="menu" type="button" onClick={() => setMenu(!menu)}>
        ≡
      </button>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
