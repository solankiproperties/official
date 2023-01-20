import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

const Products = ({ slice }) => (
  <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-20 bg-gray-50">
  <div className="container relative z-[1] m-auto px-6 md:px-12">
    <div className="m-auto text-center md:w-8/12 lg:w-6/12">
    <RichText field={slice.primary.product_details_title} className="text-2xl underline font-bold text-black md:text-4xl"/>
      
    </div>
    
      
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 lg:gap-6 rounded-xl py-4 px-4 "
        >
   
   {
slice?.items?.map((item, i) =>
<div key={i}>
<Image src={item.product_image.url} width={500} height={500} className=" h-96 w-full object-cover hover:scale-105 transition duration-200"/>
<RichText field={item.product_title} className="text-black  mt-4 text-xl font-bold" />
<RichText field={item.product_description} className="text-dark  mt-2 text-xl font-light" />
<RichText field={item.button}  className="inline-flex mr-2 mt-2 text-lg md:text-2xl ease-in duration-300 items-center justify-center h-12 px-6 font-semibold tracking-wide text-black rounded shadow-md hover:text-white bg-amber-700 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none" />
</div>
)}

</div>
       
      </div>
    </div>
 
)

export default Products