import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'


const Featured = ({ slice }) => (
 
  
  <div className="relative flex flex-col items-center mb-10 overflow-hidden px-10 py-20 md:py-20 bg-white">
  <div className="container relative z-[1] m-auto px-6 md:px-12">
    <div className="m-auto text-center md:w-8/12 lg:w-6/12">
      <div className="w-full px-4">
        <div className="mx-auto mb-4 max-w-[510px] text-center lg:mb-2">
        <RichText field={slice.primary.title} className="text-primary mb-2 block text-2xl font-semibold" />
          
        <RichText field={slice.primary.description} className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]" />
        <RichText field={slice.primary.sub_description} className="text-body-color text-2xl" />
         
        </div>
      </div>
    </div>
   
     
      
   
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 rounded-xl py-4 px-4 "
        >
   
   {
slice?.items?.map((item, i) =>
<div key={i} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
<Image src={item.icon_image.url} width={100} height={100} className=" mb-4 w-12 h-12 rounded-full hover:scale-105 transition duration-100"/>
<RichText field={item.heading} className="text-black mb-3 mt-2 text-xl font-bold" />
<RichText field={item.sub_heading} className="text-dark mb-3 mt-2 text-xl font-light" />
</div>
)}

</div>
    </div>

    
     
    
  
</div>



)

export default Featured