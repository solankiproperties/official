import React from 'react'
import CustomLink from '@/components/CustomLink'


const BottomMenu = ({ slice }) => (


	
	<section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
		<div id="tabs" className="flex justify-between">
			
      {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="w-full text-white hover:text-amber-700 justify-center inline-block text-center pt-2 pb-1" 
          />
        ))}	
		
		</div>
	</section>



)

export default BottomMenu