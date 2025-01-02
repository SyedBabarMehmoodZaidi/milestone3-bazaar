import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <div>
       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <h1 className='text-2xl font-semibold'>New Products</h1>      
    </div>
      
       <div className="mt-12 flex gap-x-8  gap-y-16 justify-between flex-wrap">
      
      

        
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
        <Image src="/watch.jpg" alt="watch" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
        <Image src="/watch1.jpg" alt="watch" fill sizes="25vw" className="absolute object-cover rounded-md"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Rolex</span>
            <span className="font-semibold">$450.00</span>
        </div>
        <div className="text-sm text-gray-500">
        Elegant street lamp providing light and timeless charm.</div>
        <div className="rounded-2xl ring-1 ring-apnaghar text-apnaghar w-max py-2 px-4 text-xs hover:bg-apnaghar hover:bg-red-500 hover:text-white">
        Add to cart</div>
        </Link>

        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
        <Image src="/perfume.jpg" alt="perfume" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
        <Image src="/perfume1.jpg" alt="perfume1" fill sizes="25vw" className="absolute object-cover rounded-md"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">N5 Chanel Perfume</span>
            <span className="font-semibold">$200.00</span>
        </div>
        <div className="text-sm text-gray-500">N5 Chanel Perfume: A timeless, sophisticated fragrance with floral notes.</div>
        <div className="rounded-2xl ring-1 ring-apnaghar text-apnaghar w-max py-2 px-4 text-xs hover:bg-apnaghar hover:bg-red-500 hover:text-white">
        Add to cart</div>
        </Link>

        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
        <Image src="/ladiesdress.webp" alt="ladiesdress" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
        <Image src="/ladiesdress1.webp" alt="ladiesdress" fill sizes="25vw" className="absolute object-cover rounded-md"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Sana Safinaz</span>
            <span className="font-semibold">$299.00</span>
        </div>
        <div className="text-sm text-gray-500">A luxury brand offering elegant, contemporary fashion with intricate designs</div>
        <div className="rounded-2xl ring-1 ring-apnaghar text-apnaghar w-max py-2 px-4 text-xs hover:bg-apnaghar hover:bg-red-500 hover:text-white">
        Add to cart</div>
        </Link>

        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
        <Image src="/necklace.jpg" alt="necklace" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
        <Image src="/necklace1.jpg" alt="necklace" fill sizes="25vw" className="absolute object-cover rounded-md"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Crystal Stone Necklace</span>
            <span className="font-semibold">$350.00</span>
        </div>
        <div className="text-sm text-gray-500"> A glamorous necklace with eye-catching crystal stones, perfect for any occasion.</div>
        <div className="rounded-2xl ring-1 ring-apnaghar text-apnaghar w-max py-2 px-4 text-xs hover:bg-apnaghar hover:bg-red-500 hover:text-white">
        Add to cart</div>
        </Link>


    </div>
    </div>
  )
}

export default Featured
