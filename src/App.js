import React, { useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,

  Routes,
  Route
} from "react-router-dom"

import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login';

import { auth } from './firebase1';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, selectUser } from './features/userSlice'
import Profile from './Components/Profile';




function App() {
      const user = useSelector(selectUser)

     
      

    const dispatch = useDispatch()
   
     useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth){
              console.log( { uid: userAuth.uid,
                email: userAuth.email,})

              dispatch(login({
                uid: userAuth.uid,
                email: userAuth.email,
              }))
            } else {
               console.log("user logged out in this app")

               dispatch(logout())
            }
          })
     
       return () => {
            unsubscribe()
       }
     }, [dispatch])
     


  return (
    <div className="app">
       
       <Router>
           { !user ? ( <Login/>) : ( 
             <Routes>
            <Route path="/"  exact element = {<HomeScreen/>}/> 
            <Route path= "/profile"  exact element = {<Profile/>}/> 
            
      </Routes>)}

       
       </Router>
       
    </div>
  );
}

export default App;
