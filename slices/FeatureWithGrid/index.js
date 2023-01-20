import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'




const FeatureWithGrid = ({ slice }) => (
  <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center">
    <RichText field={slice.primary.heading} className="text-3xl font-bold sm:text-4xl"/>
    <RichText field={slice.primary.sub_heading} className="mt-4 text-gray-300 text-xl md:text-2xl"/>

  
    </div>

    
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {
 slice?.items?.map((item, i) =>
 <div key={i} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
 
<Image src={item.icon_image.url} width={200} height={200} className="mb-4 w-12 h-12 rounded-full hover:scale-105 transition duration-100"/>
<RichText field={item.title} className="mt-4 text-2xl font-semibold text-white" />
<RichText field={item.description} className="mt-1 text-xl text-gray-300" />
</div>

)}
    
       
     

    </div>
  </div>
</section>

)

export default FeatureWithGrid