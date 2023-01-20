import React from 'react'

import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'

const ImageWithParagraph = ({ slice }) => (
 

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-left sm:text-left">
    <RichText field={slice.primary.heading} className="text-3xl font-bold text-black md:text-4xl"/>
      
    <RichText field={slice.primary.paragraph} className="text-gray-900 text-2xl md:text:2xl md:mt-4 md:block"/>

      <div className="mt-4 md:mt-8">
      {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="inline-block rounded bg-amber-700 px-12 py-3 text-xl font-medium text-black hover:text-white transition hover:bg-red-accent-700 focus:outline-none focus:ring focus:ring-yellow-400"
          />
        ))}
      
      </div>
    </div>
  </div>
  <Image src={slice.primary.image.url} alt={slice.primary.image.alt} 
  className="h-56 w-full object-cover sm:h-full"
  width={1080}
  height={1080}/>


</section>



)

export default ImageWithParagraph