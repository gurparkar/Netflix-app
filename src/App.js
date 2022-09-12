import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,

  Routes,
  Route
} from "react-router-dom"

import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login';

function App() {
     const user = null;


  return (
    <div className="app">
       
       <Router>
           { !user ? ( <Login/>) : ( 
             <Routes>
            <Route path="/"  exact element = {<HomeScreen/>}/> 
            
      </Routes>)}

       
       </Router>
    </div>
  );
}

export default App;
