import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const DashBoard = () => {
  const [openMenu, setOpenMenu] = useState(!!false);

  const setMenu = (value) => {
    setOpenMenu(value);
  };

  return (
    <div id="App">
      <Header menuState={(value) => setMenu(value)} />
      <Main menuState={openMenu} />
    </div>
  );
};

export default DashBoard;
