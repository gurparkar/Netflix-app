import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Navbar from './Navbar';



import { auth } from '../firebase1';

function Profile() {
   const user = useSelector(selectUser)

   const dispatch = useDispatch()

  return (
    <div className = "profileScreen">
      
    <Navbar/>
      <div className = "profileScreen__body">
           <h1> Edit Profile</h1>

           <div className = "profileScreen__info">
           
           <img
      
    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
           <div className = "profileScreen__details">
           
           <h2> { user.email}</h2>
           <button className = "profileScreen__signOut" onClick={ () => auth.signOut()}> Logout</button>
           </div>
           </div>
      </div>
    
    </div>
  )
}

export default Profile