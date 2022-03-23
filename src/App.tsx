import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={Home()} />
        {/* <Route path='/jobs/search' element={Search()} /> */}
      </Routes>
    </>
  );
}

export default App;
