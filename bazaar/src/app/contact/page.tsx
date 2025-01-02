"use client"

import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

const ContactPage = () => {
 
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    };


  return (
    <div>
      <div className="relative w-full">
  <Image src="/banner1.jpg" alt="banner" layout="responsive" width={100} height={50} objectFit="cover" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6">
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">Contact Us</h1>
    <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-100">Feel free to contact me for trustworthy and efficient services.</p>
  </div>
</div>



<div >
<div>
      <div className="max-w-lg mx-auto p-8 rounded-lg bg-slate-950 backdrop-blur-md text-center border border-transparent mt-24">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-white mb-4">Get in touch</h1>
        <p className="text-white mb-6">
          Drop a line, give me a call, or send a message by submitting the form.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="text-left">
            <label htmlFor="name" className="block text-sm font-bold text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email Field */}
          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Message Field */}
          <div className="text-left">
            <label htmlFor="message" className="block text-sm font-bold text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300"
          >
            Send
          </button>
        </form>

        {/* Display submitted name and message */}
        {submitted && (
          <div className="mt-6 text-white">
            <h2 className="text-xl font-bold">Comments</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Message:</strong> {message}</p>
          </div>
        )}
      </div>
    </div>
    </div>

    </div>
  )
}

export default ContactPage
