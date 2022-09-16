import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Navbar from './Navbar.js'

import '../Profile.css';
import PlanScreen from './Planscreen'





import { auth } from '../firebase1';

function ProfileScreen() {
  const user= useSelector(selectUser);
  return (
    
    <div className='profileScreen'>
    <Navbar />
    <div className='profileScreen__body'>
      <h1>Edit Profile</h1>
      <div className='profileScreen__info'>
        <img
          
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Avatar'
        />
        <div className='profileScreen__details'>
          <h2>{user.email}</h2>
          <div className='profileScreen__plans'>
            <h3>Plans</h3>
            <PlanScreen />
            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
     
  </div>

  )
}

export default ProfileScreen


