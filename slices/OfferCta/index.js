import React from 'react'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'



const OfferCta = ({ slice }) => (
  
<section className="relative overflow-hidden rounded-lg pb-80 shadow-2xl lg:pb-0">
  <div className="ml-auto p-8 text-center sm:p-12 lg:w-2/3">
    <RichText field={slice.primary.heading} className="text-xl font-semibold uppercase tracking-widest"/>
   

    <h2 className="mt-6 font-black uppercase">
    <RichText field={slice.primary.sub_heading} className="text-5xl font-black sm:text-6xl"/>
    <RichText field={slice.primary.micro_heading} className="mt-2 block text-xl"/>
      
    </h2>



    {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
          />
        ))}

<RichText field={slice.primary.offer_end} className="mt-12 text-xl font-medium uppercase text-gray-800"/>
    
  </div>

  <div className="absolute bottom-0 left-0 h-80 w-full lg:h-full lg:w-1/3">
  <Image src={slice.primary.offer_image.url} alt={slice.primary.offer_image.alt}
  className="absolute inset-0 h-full w-full object-cover"
  width={1920}
  height={1280} />
    

  </div>
</section>




)

export default OfferCta