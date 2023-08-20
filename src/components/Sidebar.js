import React from 'react'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
const Sidebar = () => {

    const navigate=useNavigate();
  return (
    <div className='sidebar'>
      <div className='top-section'>
      <div  className='logo'>
            
            <img src={logo} alt=""  />
            <div className='divider'></div>
            </div>
            <div className='options'>
                <button onClick={()=>navigate('/')}>Register</button>
                <button onClick={()=>navigate('/database')}>Load All Data</button>
                <button onClick={()=>navigate('/verification')}>Verify A Person</button>
                <button onClick={()=>navigate('/search')}>Find A Person</button>
            </div>
      </div>
      <div className='scan'>
        {/* <img src={require('../assets/man.png')} /> */}
        <div className='face'></div>
        <h3>FACE AGENT SCANNING...</h3>
      </div>
    </div>
  )
}

export default Sidebar