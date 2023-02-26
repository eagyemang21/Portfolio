
import './App.css';
import React from 'react'
import Projects from './components/projects';
import Biography from './components/Bio';
import Personals from './components/Personals';
import Navbar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <h1>Elijah Agyemang</h1>
      <Navbar />
      <div className='history'>
        <Biography/>
      </div>
      <div className='projects'>
        <Projects />
      </div>
      <div className='personals'>
        <Personals />
      </div>
    </div>
  );
}

export default App;
