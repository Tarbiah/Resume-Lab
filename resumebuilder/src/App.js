import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import './style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/body' element={<Body/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
