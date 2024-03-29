import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Login from './components/Login';
import Registration from './components/registration';
import { useAuth } from './contexts/authContext';

const App = () => {
  const { isValid } = useAuth();
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={!isValid ? <Registration/> : <Navigate to="/dash"/>}/>
          <Route path='/login' element={!isValid ? <Login/> : <Navigate to='/dash'/>}/>
          <Route path='/dash' element={!isValid ? <Dashboard/> : <Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
