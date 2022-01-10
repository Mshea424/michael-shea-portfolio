import './App.css';
import './section.css';

import Header from './components/header/index'
import AppDrawer from './components/app-drawer/index'

import About from './components/about';
import Skills from './components/skills/index';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <AppDrawer/>
      <Header/>
      <div className="main">
          <About/>
          <div className="section-break"></div>
          <Skills/>
          <div className="section-break"></div>
          <Projects/>
          <div className="section-break"></div>
          <Contact/>
      </div>
      <div 
        className="fade fade-top"
        style={ { backgroundImage: 'url(images/lightseagreen-fade-top.png)'} }
      ></div>
      <div 
        className="fade fade-bottom"
        style={ { backgroundImage: 'url(images/lightseagreen-fade-bottom.png)'} }  
      ></div>
    </div>
  );
}

export default App;
