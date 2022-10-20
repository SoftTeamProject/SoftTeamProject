import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import { Footer } from './components/layaout/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
