import React from 'react'

import Image from 'next/image'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'

const VideoSimple = ({ slice }) => (
  
<div className="relative">
<Image src={slice.primary.bg_image.url} alt={slice.primary.bg_image.alt} 
className="absolute inset-0 object-cover w-full h-full"
width={1920}
height={1280}/>
<div className="relative bg-gray-900 bg-opacity-75">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <RichText field={slice.primary.page_heading} className="mb-6 font-sans text-3xl font-bold text-center text-white sm:text-5xl sm:leading-none"/>
          <RichText field={slice.primary.sub_heading} className="mb-4 text-2xl text-white text-center md:text-3xl"/>
          <div dangerouslySetInnerHTML={{ __html: slice.primary.video_embed_here.html }} className="aspect-w-16 aspect-h-9"/>
        
          {slice?.items?.map((item, i) => (
  <CustomLink
    key={i}
    text={item.cta_text_click}
    link={item.cta_link_click}
    className="mt-8 inline-block w-full bg-black py-4 text-3xl md:text-5xl text-center font-bold uppercase tracking-widest text-white"
  />
))}
  </div>
 
</div>



</div>
</div>

</div>




)

export default VideoSimple