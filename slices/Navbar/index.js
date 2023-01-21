import React from 'react';
import CustomLink from '@/components/CustomLink'

import Image from 'next/image';
import Link from 'next/link';



const Navbar = ({ slice }) => (
  
<nav
  aria-label="Site Nav"
  className="fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md  z-50 w-full px-5 py-2 mb-4 flex justify-between items-center"
>
 
<Link href="/"><Image src={slice.primary.company_logo_image.url} alt={slice.primary.company_logo_image.alt} 
                  width={100}
                  height={100}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100" /><span className="sr-only">Logo</span></Link>


  <ul className="flex items-center gap-2 text-lg font-medium text-gray-50">
  {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.menu_bar_text}
            link={item.menu_bar_link}
            className="rounded-lg px-3 py-2" 
          />
        ))}
    
  </ul>
</nav>





)

export default Navbar