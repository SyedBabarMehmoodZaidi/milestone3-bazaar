import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/*Top*/}
     <div className="flex flex-col md:flex-row justify-between gap-24">
  
     {/*Left*/}
     <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
     <Link href="/"><div className="text-2xl tracking-wide">BAMSI</div>
     </Link>
     <p>flat C-01 phase II North Heaven North Nazimabad block-B karachi</p>
     <span className="font-semibold">babarbamsi@gmail.com</span>
     <span className="font-semibold">+92 308 2735132</span>
     <div className="flex gap-6">
      <Image src="/facebook.png" alt="facebookicon" width={16} height={16}/>
      <Image src="/instagram.png" alt="instagramicon" width={16} height={16}/>
      <Image src="/youtube.png" alt="youtubeicon" width={16} height={16}/>
      <Image src="/pinterest.png" alt="pinteresticon" width={16} height={16}/>
      <Image src="/x.png" alt="xicon" width={16} height={16}/>
     </div>
     </div>
  
     {/*Center*/}
     <div className="hidden lg:flex justify-between w-1/2">
     <div className="flex flex-col justify-between">
      <h1 className='font-medium text-lg'>COMPANY</h1>
      <div className="flex flex-col gap-6">
        <Link href="">About Us</Link>
        <Link href="">Careers</Link>
        <Link href="">Affiliates</Link>
        <Link href="">Blog</Link>
        <Link href="">Contact Us</Link>
      </div>
     </div>

     <div className="flex flex-col justify-between">
      <h1 className='font-medium text-lg'>Shop</h1>
      <div className="flex flex-col gap-6">
        <Link href="">New Arrivals</Link>
        <Link href="">Accessories</Link>
        <Link href="">Men</Link>
        <Link href="">Women</Link>
        <Link href="">All Products</Link>
      </div>
     </div>

     <div className="flex flex-col justify-between">
      <h1 className='font-medium text-lg'>Help</h1>
      <div className="flex flex-col gap-6">
        <Link href="">Customers Service</Link>
        <Link href="">My Account</Link>
        <Link href="">Find A Store</Link>
        <Link href="">Legal & Privacy</Link>
        <Link href="">Gift Card</Link>
      </div>
     </div>
     </div>
  
     {/*Right*/}
     <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
     <h1 className="font-medium text-lg">SUBSCRIBE</h1>
     <p className="">Be the first to get the latest news about trends, promotions, and much more!</p>
     
     <div className="flex">  
      <input type="text" placeholder="Email address" className='p-4 w-3/4'/>
      <button className='w-1/4 bg-apnaghar text-white'>Join</button>
      </div>   
     <span className='font-semibold'>Secure Payments</span>
      <div className="flex justify-between">
      <Image src="/discover.png" alt="discover" width={40} height={20}/>
      <Image src="/skrill.png" alt="skrill" width={40} height={20}/>
      <Image src="/paypal.png" alt="paypal" width={40} height={20}/>
      <Image src="/mastercard.png" alt="mastercard" width={40} height={20}/>
      <Image src="/visa.png" alt="visa" width={40} height={20}/>
      </div>    
     </div>
     </div>
     {/*Bottom*/}
     <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
      <div className="&copy; 2024 APNA BAZAAR">&copy; 2024 APNA BAZAAR</div>
      <div className="flex flex-col gap-8 md:flex-row">
      <div className="">
        <span className='text-gray-500 mr-4'>Language</span>
        <span className='font-medium'>United States | English</span>
      </div>
      <div className="">
        <span className='text-gray-500 mr-4'>Currency</span>
        <span className='font-medium'>$ USD</span>
      </div>
      </div> 
     </div>
    </div>
  )
}

export default Footer
