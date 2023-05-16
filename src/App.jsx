import { useState } from 'react'
import './index.css'
import NavBar from './components/navBar';
import Hero from './components/Hero';
import About from './components/About';
import Tours from './components/Tours';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
    </>
  )
}

export default App
