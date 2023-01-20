import React from 'react'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'

const CallToAction = ({ slice }) => (
  


  <div className="bg-gradient-to-br from-pink-500 to-purple-600 py-16 md:bg-gradient-to-r">
  <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
  <RichText field={slice.primary.heading} className="mb-8 text-4xl font-bold text-white md:text-4xl"/>
    
  <div>
        {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
          />
        ))}
      </div>

    
  </div>
</div>

                                    


)

export default CallToAction