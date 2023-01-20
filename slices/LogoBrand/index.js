import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

const LogoBrand = ({ slice }) => (
 


  <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-20 bg-gray-50">
  <div className="container relative z-[1] m-auto px-6 md:px-12">
    <div className="m-auto text-center md:w-8/12 lg:w-6/12">
    <RichText field={slice.primary.title} className="text-2xl font-bold text-black md:text-4xl"/>
      
    </div>
    <div className="m-auto mt-4 md:w-11/12 lg:w-8/12 xl:w-7/12">
      
    <div className=" justify-center items-center grid grid-cols-2 md:grid-cols-3 rounded-lg gap-4 lg:gap-6"
        >
          {
  slice?.items?.map((item, i) =>
    <Image src={item.brand_logo_image.url} alt={item.brand_logo_image.alt} 
    className="contrast-0 transition hover:contrast-100"
    width={100}
    height={100} />
  )
}

        </div>
       
      </div>
    </div>
  </div>

                                    

  
)

export default LogoBrand