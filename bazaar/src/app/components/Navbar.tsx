import Link from 'next/link'
import React from 'react'
// import Menu from './Menu'
import Image from 'next/image'

import { FaBars } from 'react-icons/fa6';
import SearcBar from './SearchBar'


interface Props {
    openNav:() => void
  }



const Navbar = ({openNav}:Props ) => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
  {/*Mobile*/}
  <div className="h-full flex items-center justify-between md:hidden">
    <Link href="/">
      <div className="text-2xl tracking-wide font-semibold">BAMSI</div>
    </Link>
    <div onClick={openNav} className="w-[2rem] h-[2rem] text-black">
      <FaBars />
    </div>
  </div>

  {/*Bigger Screens*/}
  <div className="hidden md:flex items-center justify-between gap-8 h-full">
    {/*Left*/}
    <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={24} height={24} />
        <div className="text-2xl tracking-wide font-medium">BAMSI</div>
      </Link>
      <div className="hidden xl:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
    {/*Right*/}
    <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
      <SearcBar />
      
    </div>
  </div>
</div>

  )
}

export default Navbar
