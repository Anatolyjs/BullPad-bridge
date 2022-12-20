import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Wallets from './components/common/Wallets';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [openWallets, setOpenWallets] = useState(false);
  return (
    <div className="App">
      <Header setOpenWallets={setOpenWallets}/>
      <Main />
      <Wallets openWallets={openWallets} setOpenWallets={setOpenWallets}/>
    </div>
  );
}

export default App;
