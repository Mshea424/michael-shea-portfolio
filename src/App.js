import { createContext } from 'react';

import './App.css';
import Header from './components/header/index'
import AppDrawer from './components/app-drawer/index'
import ResponsiveGrid from './components/responsive-grid/index';

import logoUrls from './logoUrls'
// import projects from './projects'

export const LogosContext = createContext();
// export const ProjectsContext = createContext(projects);

function App() {
  return (
    <div className="App">
      <AppDrawer/>
      <Header/>
      <LogosContext.Provider value={logoUrls}>
        <ResponsiveGrid 
        itemsType={'logo'}
        />
      </LogosContext.Provider>
    </div>
  );
}

export default App;
