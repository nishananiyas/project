import React from 'react'
import Cards from './Cards';
import Promotion from './Promotion';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

const Menu = () => {
  return (
    <div className="Menu">
<br /><br />
      <Cards/>
<br /><br />      
      <Promotion/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div> 
  )
}

export default Menu