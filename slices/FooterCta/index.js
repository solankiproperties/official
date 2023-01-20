import React from 'react'
import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'

const FooterCta = ({ slice }) => (
 

<section className="py-10 lg:py-[20px]">
  <div className="container mx-auto">
    <div
      className="bg-blue-900 relative z-10 overflow-hidden rounded py-12 px-8 md:p-[70px]"
    >
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full px-4 lg:w-1/2">
        <RichText field={slice.primary.heading} className="mb-2 text-base font-semibold text-white"/>
        <RichText field={slice.primary.subheading} className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0"/>
         
        </div>
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          
         
        {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="inline-flex mr-2 mt-2 text-lg md:text-2xl ease-in duration-300 items-center justify-center h-12 px-6 font-semibold tracking-wide text-black rounded shadow-md hover:text-white bg-amber-700 hover:bg-red-accent-700 focus:shadow-outline focus:outline-none"
          />
        ))}
    
          
         
        </div>
      </div>
      <div>
        <span className="absolute top-0 left-0 z-[-1]">
          <svg
            width="189"
            height="162"
            viewBox="0 0 189 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="16"
              cy="-16.5"
              rx="173"
              ry="178.5"
              transform="rotate(180 16 -16.5)"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-157"
                y1="-107.754"
                x2="98.5011"
                y2="-106.425"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.07" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="191"
            height="208"
            viewBox="0 0 191 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="173"
              cy="178.5"
              rx="173"
              ry="178.5"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-3.27832e-05"
                y1="87.2457"
                x2="255.501"
                y2="88.5747"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.07" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  </div>
</section>


)

export default FooterCta