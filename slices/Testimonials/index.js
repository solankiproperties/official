
import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'


const Testimonials = ({ slice }) => (
  


  <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-20 bg-gray-50">
  <div className="container relative z-[1] m-auto px-6 md:px-12">
    <div className="m-auto text-center md:w-8/12 lg:w-6/12">
    <RichText field={slice.primary.title} className="text-2xl underline font-bold text-black md:text-4xl"/>
      
    </div>
    
      
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 lg:gap-6 rounded-xl py-4 px-4 sm:flex sm:items-center sm:justify-center sm:gap-4"
        >






   {
 slice?.items?.map((item, i) =>
<div key={i}>
  
<Image src={item.customer_image.url} width={100} height={100} className="mb-4 w-15 h-15 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition duration-100"/>
<RichText field={item.customer_feedback} className="text-xl md:text-2xl mt-4" />
<RichText field={item.customer_name} className="text-lg font-semibold leading-none text-left mt-2" />
<RichText field={item.customer_position} className="text-xs text-gray-500 text-left mt-2" />

</div>
)}

</div>
       
      </div>
    </div>
  
  
      


)

export default Testimonials