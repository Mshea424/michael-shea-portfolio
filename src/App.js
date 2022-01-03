import {useContext} from 'react';

import './App.css';
import Header from './components/header/index'
import AppDrawer from './components/app-drawer/index'
import ResponsiveGrid from './components/responsive-grid/index';

import logos from './logos'

function App() {
  return (
    <div className="App">
      <AppDrawer/>
      <Header/>
      <ResponsiveGrid 
        itemsType={logos.itemsType}
        logoUrls={logos.logoUrls}
      />
    </div>
  );
}

export default App;
