import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Model1 from './pages/Model1'
import Model2 from './pages/Model2'
import Model3 from './pages/Model3'
import MiniGame1 from './pages/MiniGame1'
import MiniGame2 from './pages/MiniGame2'
import MiniGame3 from './pages/MiniGame3'
import MiniGame4 from './pages/miniGame4'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div > 
      <ToastContainer
      position="top-right"
          autoClose={50000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/model1' element={<Model1/>}/>
        <Route path='/model2' element={<Model2/>}/>
         <Route path='/model3' element={<Model3/>}/>
         <Route path='/game1' element={<MiniGame1/>}/>
         <Route path='/game2' element={<MiniGame2/>}/>
         <Route path='/game3' element={<MiniGame3/>}/>
         <Route path='/game4' element={<MiniGame4/>}/>
         </Routes>
    </div>
  );
};

export default App;

