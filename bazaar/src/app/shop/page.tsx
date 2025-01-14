"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

// Define the Product type based on API structure
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Page = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const result = await data.json();
      console.log(result);
      setProduct(result.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src="/shop.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Shop Smart, Live Better!
          </h1>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-100 mt-4">
            Explore the best deals and a wide range of products tailored <br />
            to your needs. Shop now and enjoy quality you can trust!
          </p>
        </div>
      </div>

      <div className='mt-12 flex justify-between'>
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Type</option>
                <option value="Physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name="min" placeholder="min price" className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            
            <input type="text" name="max" placeholder="max price" className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <select name="size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Size</option>
                <option value="">Size</option>
            </select>

            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Color</option>
                <option value="">Test</option>
            </select>

            <select name="ribbon" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>

            <select name="" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>All Filters</option>
            </select>
        </div>
        <div className="">
            <select name='' id='' className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
      

       


    </div>

      <div className="flex flex-col items-center p-8">
        <h1 className="text-[28px] font-bold relative inline-block">
          Product List
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
        </h1>
        <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {product.map((item) => (
            <div
              className="border-2 border-black rounded-2xl p-8 bg-white text-black"
              key={item.id}
            >
              {item.images.slice(0, 1).map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${item.title} - Image ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover mb-4 mx-auto"
                />
              ))}
              <h3 className="text-lg font-semibold text-center">{item.title}</h3>
              <p className="text-sm text-center">
                <span className="text-gray-500">Category : </span>
                {item.category}
              </p>
              <p className="text-sm font-bold text-gray-600 hover:text-orange-500 text-center">
                ${item.price}
              </p>
              <div className="flex items-center mt-2">
                <button className="rounded-2xl ring-1 ring-apnaghar text-red-600 w-max py-2 px-4 text-xs hover:bg-apnaghar bg-pink-50 hover:bg-red-500 hover:text-white mx-auto hover:shadow-xl hover:scale-[1.25] transition duration-300">
                <Link href={`/product/${item.id}`}>
                  Add to Cart
                </Link>  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
