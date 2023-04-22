import React from 'react';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
