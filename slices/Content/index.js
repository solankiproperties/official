import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

const Content = ({ slice }) => (
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
         
        <Image src={slice.primary.content_image.url} alt={slice.primary.content_image.alt} 
        className="w-full h-full object-cover object-center"
        width={1080}
        height={1080}
        />
        </div>
      </div>

      <div className="md:pt-8">
       
      <RichText field={slice.primary.title} className="text-black text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6"/>
      <RichText field={slice.primary.description} className="text-gray-900 text-xl sm:text-xl mb-6 md:mb-8"/>

        
      </div>
    </div>
  </div>
</div>
)

export default Content