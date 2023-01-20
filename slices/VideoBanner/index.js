import React from 'react'

import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'

const VideoBanner = ({ slice }) => (
 
  <div className="relative">
  <Image src={slice.primary.background_image.url} alt={slice.primary.background_image.alt} className="absolute inset-0 object-cover w-full h-full"
  width={1920}
  height={1080}
  />
  <div className="relative bg-black bg-opacity-75">
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">

 
    <div className="mx-auto max-w-3xl text-center">
    <RichText field={slice.primary.title} className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"/>
    <RichText field={slice.primary.description} className="mx-auto max-w-xl text-xl sm:text-xl text-white sm:leading-relaxed"/>
    <div  dangerouslySetInnerHTML={{ __html: slice.primary.video.html }} className="aspect-w-16 aspect-h-9"/>

      <div className="mt-2 flex flex-wrap justify-center gap-4">
        
      {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="block w-full rounded border border-amber-700 bg-amber-700 px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          />
        ))}
       
      </div>
    </div>
  </div>

</div>
</div>
</div>
</div>


)

export default VideoBanner