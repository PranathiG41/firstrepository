import React from 'react';
import Login from './Pages/Login_signup/Login.jsx';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signup from './Pages/Login_signup/Signup.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
