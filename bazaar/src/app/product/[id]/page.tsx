
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}; 


const page = async ({ params }: { params : Promise <{ id: string }> }) => {
const id = (await params).id
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col justify-center items-center lg:flex-row gap-16 bg-red-500 text-white mt-24">

      <div>
      <Image src={product.thumbnail} alt={product.title} className="w-full lg:w-1/2 lg:sticky top-20 h-max " />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 bg-red-500 text-white"> 
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
      <p className=" mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default page;