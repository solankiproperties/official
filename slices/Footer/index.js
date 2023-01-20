import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

import CustomLink from '@/components/CustomLink'
const Footer = ({ slice }) => (
 

<footer aria-label="Site Footer" className="bg-gray-100">
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
      <a
        className="inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
        href="#top"
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
        <Image src={slice.primary.brand_logo.url} alt={slice.primary.brand_logo.alt} 
        width={100} height={100}
        className="mb-4 w-12 h-12 rounded-full hover:scale-105 transition duration-100"
        />
        </div>
        <RichText field={slice.primary.brand_description} className="mx-auto mt-6 max-w-md text-center leading-relaxed text-Brand lg:text-left"/>
        
      </div>

      <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
        <ul
          className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
 {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.footer_menu_text}
            link={item.footer_menu_link}
            className="text-gray-900 transition hover:text-gray-900/75" 
          />
        ))}

        </ul>
      </nav>
    </div>
    <RichText field={slice.primary.copyright_text} className="mt-12 text-center text-sm text-gray-900 lg:text-right"/>
    
  </div>
</footer>


)

export default Footer