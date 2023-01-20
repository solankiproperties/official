import React from 'react'
import RichText from '@/components/RichText'


const ContentCenter = ({ slice }) => (
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
  <RichText field={slice.primary.heading} className="text-black text-2xl sm:text-4xl font-bold text-center mb-4 md:mb-6"/>
    
  <RichText field={slice.primary.content} className="text-gray-900 sm:text-xl text-xl mb-6 md:mb-8"/>

   

  
  </div>
</div>
)

export default ContentCenter