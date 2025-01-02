import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
   <main className='mt-24'>

<div className="mt-24">
      <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12 font-semibold'>Categories</h1>
      
     </div>
   
   <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
        <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/allproduct.jpeg" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">All Products</h1>
            </Link> 
            
            <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/accessories.jpeg" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Accessories</h1>
            </Link> 
            
            <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/bag.jpeg" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Bags</h1>
            </Link> 
            
            <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/shoe2.webp" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Shoes</h1>
            </Link> 

            <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/home.jpeg" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Home</h1>
            </Link>

            <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/jeans.jpeg" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Jeans</h1>
            </Link>

            <Link href="list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/tshirts.jpeg" alt="" fill sizes="20vw" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">T-shirts</h1>
            </Link>
            
        </div>
      
    </div>

    </main>
  )
}

export default Category
