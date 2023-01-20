import React from 'react'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'


const HeroWithEmbed = ({ slice }) => (
  

  <div className="relative">
  <Image src={slice.primary.background_image.url} alt={slice.primary.background_image.alt}
  className="absolute inset-0 object-cover w-full h-full"
  width={1920}
  height={1280} />
  
  <div className="relative bg-opacity-75 bg-gradient-to-r from-indigo-500">
    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
        <RichText field={slice.primary.title} className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none" />
        <RichText field={slice.primary.description} className="max-w-xl mb-4 text-xl text-gray-200 md:text-xl" />
        <div>
        {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.button_text}
            link={item.button_link}
            className="inline-flex mr-2 mt-2 text-lg md:text-2xl ease-in duration-300 items-center justify-center h-12 px-6 font-semibold tracking-wide text-black rounded shadow-md hover:text-white bg-amber-700 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none"
          />
        ))}
      </div>
        </div>
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
          <RichText field={slice.primary.embed_above_text} className="mb-4 text-xl underline text-center font-semibold sm:text-center sm:mb-6 sm:text-2xl" />
         
          <div  dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} className="aspect-w-16 aspect-h-9"/>
          <RichText field={slice.primary.note_below_embed} className="mb-4 text-xl text-center font-semibold sm:text-center sm:mb-6 sm:text-xl"/>
             
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



)

export default HeroWithEmbed