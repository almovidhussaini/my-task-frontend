import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Login from './pages/Login'
// import Hero from './pages/Hero'
import Protected from './pages/Protected'

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={
          <Protected/>
      }/>

    </Routes>
    <ToastContainer position='top-center' />
    </BrowserRouter>
   
   
  );
}

export default App;
