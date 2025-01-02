import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[50vh] md:h-[70vh]">
  <Image
    src="/about.jpg"
    alt="banner"
    layout="fill"
    objectFit="cover"
    className="w-full h-full"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
      Hello, I&apos;m Bamsi
    </h1>
    <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-100 mt-4">
    Bamsi is an e-commerce platform offering a wide range of products <br /> 
    at affordable prices, providing a seamless shopping experience <br /> 
    with fast delivery and secure payments.
    </p>
  </div>
</div>

   
      <div>
    <div className="h-screen bg-red-400 flex flex-col-reverse lg:flex-row items-center mt-14">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
        {/* Heading */}
        <h1 className="max-w-[376px] font-bold text-[20px] text-white">
        
        Bamsi is an e-commerce platform offering a variety of products at great prices with fast delivery and secure payment options.
        </h1>

        {/* Paragraph */}
        <p className="max-w-[376px] text-[18px] font-normal text-white">
        
        Welcome to Bamsi, your one-stop online destination for a wide range of products at unbeatable prices. Explore our curated collection of high-quality items, from fashion and electronics to home essentials, all available at the click of a button. With a user-friendly interface, secure payment options, and fast delivery, shopping at Bamsi is a hassle-free experience. Join us today and discover amazing deals tailored to your needs
        </p>

        {/* Button */}
        <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md text-white">
          CONTACT ME
        </button>

        {/* Contact Information */}
        <p className="font-bold text-white mt-4">Phone: +92 308 273 5132</p>
        <p className="font-bold text-white">Fax: + 451 215 215</p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image src="/bamsi.jpg" alt="Image description" width={450} height={900} />
      </div>
    </div>
  </div>
   


      <div className='pt-[5rem] pb-[3rem]'>
      <h1 className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 text-2xl font-semibold'>
        Meet Our Expert Team Member 
      </h1>
      <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>

       <div className='hover:shadow-xl hover:scale-[1.05] transition duration-300'>
        <Image src="/team1.webp" alt="alexendra" width={400} height={400} className='rounded-2xl mx-auto'/>
        <div className='justify-center items-center text-center p-8'> 
        <h1 className='font-semibold text-[24px]'>Alexendra</h1>
        <p className='font-medium text-[20px]'>Marketing Specialist</p>
        <p className='font-normal text-[14px]'> Handles marketing campaigns, promotions, and ads (such as email marketing, social media, and paid advertisements) to attract customers</p>
        </div>
        </div>

       <div className='hover:shadow-xl hover:scale-[1.05] transition duration-300'>
        <Image src="/ceo.jpg" alt="SHAHRUKH KHAN" width={400} height={400} className='rounded-2xl mx-auto'/>
        <div className='justify-center items-center text-center p-8'> 
        <h1 className='font-semibold text-[24px]'>BABAR BAMSI</h1>
        <p className='font-medium text-[20px]'>CEO</p>
        <p className='font-normal text-[14px]'> The individual or company that owns and operates the online store, responsible for overall business strategy</p>
        </div>
        </div>

       <div className='hover:shadow-xl hover:scale-[1.05] transition duration-300'> 
       <Image src="/team3.jpeg" alt="SALMAN KHAN" width={400} height={400} className='rounded-2xl mx-auto'/>
       <div className='justify-center items-center text-center p-8'> 
       <h1 className='font-semibold text-[24px]'>Smith</h1>
       <p className='font-medium text-[20px]'>Product Manager</p>
       <p className='font-normal text-[14px]'>Manages the product listings, categories, descriptions, pricing, and inventory on the website.</p>
       </div> 
       </div>

      
      </div>
    </div>
   
    </div>
  )
}

export default page
