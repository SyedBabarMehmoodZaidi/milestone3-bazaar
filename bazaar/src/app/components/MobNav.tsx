import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface Props{
  showNav: boolean;
  closeNav: () => void;
}

const MobNavbar = ({closeNav, showNav} : Props) => {

  const navStyle = showNav?'translate-x-0':'translate-x-[-100%]'; 

  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
     
      <div onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white'>
      <ImCross />
      </div>


      {/* Navbar Div*/}

      <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
{/* Navbar Div*/}

<ul className="space-y-10 ">
          <li className="text-[30px] font-semibold hover:text-yellow-500 text-white">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-[30px] font-semibold hover:text-yellow-500 text-white">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-[30px] font-semibold hover:text-yellow-500 text-white">
            <Link href="/service">SERVICES</Link>
          </li>
          <li className="text-[30px] font-semibold hover:text-yellow-500 text-white">
            <Link href="/about">ABOUT ME</Link>
          </li>
          <li className="text-[30px] font-semibold hover:text-yellow-500 text-white">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>


      </div>
      
    </div>
  )
}

export default MobNavbar
