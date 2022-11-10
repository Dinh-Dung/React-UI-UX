import React from 'react';
import {Brand,CTA,Navbar } from './components'
import {Footer, Header,Blog,Possibility,Features} from './container'
import './App.css'
function App() {
  return (
    <div className='App' >
      <div className='gradient__bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <whatGPT3/>
      <Possibility/>
      <CTA/>   
      <Features/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
