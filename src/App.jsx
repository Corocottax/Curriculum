import './App.css';
import { Contact } from './components/Home/Contact/Contact';
import { Hero } from "./components/Home/Hero/Hero.jsx"

import { Menu } from "./components/Home/Menu/Menu.jsx"
import { CV } from "./Cv/Cv"

const { info } = CV;

function App() {
  return (
    <div className='body'>
      
      <Hero info={info}/>
      <Menu />
      <Contact info={info}/>

    </div>
  );
}

export default App;
