import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './Login.js';
import Signup from './Signup';
import Home from './Home';
import Forget from './Forget';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
<ToastContainer position='bottom-center' />
      <div >
    
          <Routes>
            
            <Route path='/' element={<Login/>} exact />
            <Route path='/signup' element={<Signup/>}  />
            <Route path='/forget' element={<Forget/>}  />

            <Route path='/home/*' element={<Home/>}  />     
          </Routes>
      </div>

     
    </BrowserRouter>

  );

}

export default App;
