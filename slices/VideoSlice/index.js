import React from 'react'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'



const VideoSlice = ({ slice }) => (
  

<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
        <div  dangerouslySetInnerHTML={{ __html: slice.primary.embed_here.html }} className="aspect-w-16 aspect-h-9 absolute inset-0 h-full w-full object-cover"/>
        
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
        <RichText field={slice.primary.heading} className="text-2xl font-bold sm:text-3xl"/>
        <RichText field={slice.primary.sub_heading} className="mt-4 mb-4 text-gray-600 text-xl"/>
        {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta}
            link={item.cta_link}
            className="inline-flex mr-2 mt-2 text-lg md:text-2xl ease-in duration-300 items-center justify-center h-12 px-6 font-semibold tracking-wide text-black rounded shadow-md hover:text-white bg-amber-700 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none"
          />
        ))}

        </div>
      </div>
    </div>
  </div>
</section>



)

export default VideoSlice