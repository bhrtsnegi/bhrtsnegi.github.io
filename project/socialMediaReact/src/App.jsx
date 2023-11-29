import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </>
  );
}

export default App
