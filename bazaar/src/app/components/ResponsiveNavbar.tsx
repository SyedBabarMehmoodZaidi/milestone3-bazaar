'use client'

import React, { useState } from 'react';

import Navbar from './Navbar';
import MobNavbar from './MobNav';


const ResponsiveNavbar = () => {
const [showNav, setShowNav]= useState(false);
const openNavHandler = () =>setShowNav(true);
const closeNavHandler = () =>setShowNav(false);
  return (
    <div>
      <Navbar openNav={openNavHandler}/>
      <MobNavbar showNav={showNav} closeNav={closeNavHandler}/>

    </div>
  )
}

export default ResponsiveNavbar
