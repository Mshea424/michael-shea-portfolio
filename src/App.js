import './App.css';
import './section.css';

import Header from './components/header/index'
import AppDrawer from './components/app-drawer/index'

import Skills from './components/skills/index'

function App() {
  return (
    <div className="App">
      <AppDrawer/>
      <Header/>
      <div className="main">
        <div className="section">
          <Skills/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
