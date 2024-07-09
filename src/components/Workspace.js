import React from 'react';
import {Routes,Route} from 'react-router-dom';
import GoogleMap from './GoogleMap';
import Login from './Login';
import UserProfile from './UserProfile';
import Home from './Home';
import Driver from './Driver';
import UpdateStation from './UpdateStation';
import SignInComp from './SignIn';
import About from './About';

export default function Workspace() {

  return (

      <Routes>
        <Route path='/Map' element={<GoogleMap />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Login/:mess' element={<Login/>} />
        <Route path='/SignIn/' element={<SignInComp/>} />
        <Route path='/About/' element={<About/>} />

        <Route path='/UserProfile' element={<UserProfile/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/' element={<Home/>} />

        <Route path='/Driver' element={<Driver/>} />
      </Routes>
  );
}
