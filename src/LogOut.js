import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/loginSlicer';

const LogOut = () => {

  const dispatch = useDispatch();

 const handleLogOut = (e) => {
  e.preventDefault();

  dispatch(logOut());

 }

  return (
    <div>
    
    <h1>you are Login</h1>
    <button type='button' onClick={(e) => handleLogOut(e)}>logOut</button>
    
    </div>
    
  )
}

export default LogOut;