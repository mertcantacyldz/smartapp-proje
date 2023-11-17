import React from 'react'

export default function Component1() {
  return (
    <div className=' border-bg-gray border-b-2  md:bg-bg-gray flex w-full md:flex-col gap-[10%] md:gap-3 xl:gap-10 md:w-[10.5%]  md:justify-center items-center   md:pb-[6%] md:pt-[2%]   md:rounded-[27.24px]  3xl:w-[20.5%] '>
      <div className=' md:mb-10 xl:mb-0  flex items-center justify-center '>
        <img className='h-[30px] md:h-[50px] xl:h-[100px] ' src={`${process.env.PUBLIC_URL}/images-vectors/header-logo-white 1.png`}></img>
      </div>
      <div className=' flex md:flex-col items-center gap-[15%] md:gap-3 xl:gap-10' >
        <div className='flex flex-col items-center'>
          <img className='h-[20px] md:h-[50px] xl:h-[100px] object-cover' src={`${process.env.PUBLIC_URL}/images-vectors/176 179 293 299 353.png`}></img>
          <p className='font-inter text-white text-sm '>weather</p>
        </div>
        <div className='flex flex-col items-center transition duration-300 ease-in-out    md:hover:scale-150 group   '> 
        <svg className=' h-[20px] md:h-[35px]' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
          <path className='group-hover:fill-white' fill-rule="evenodd" clip-rule="evenodd" d="M4.61169 17.0278C4.61169 10.1706 10.1706 4.61169 17.0278 4.61169C23.885 4.61169 29.4439 10.1706 29.4439 17.0278C29.4439 23.885 23.885 29.4439 17.0278 29.4439C10.1706 29.4439 4.61169 23.885 4.61169 17.0278ZM15.3957 13.209C14.071 14.2988 13.186 15.8317 12.9045 17.5238L11.9726 23.1261C11.7575 24.4195 13.2614 25.2877 14.2739 24.4547L18.6597 20.8466C19.9844 19.7567 20.8694 18.2239 21.1509 16.5317L22.0827 10.9294C22.2979 9.63606 20.794 8.7678 19.7815 9.60079L15.3957 13.209Z" fill="#C4C3C1" />
          <path className='group-hover:fill-white' d="M14.8993 17.0278C14.8993 15.8523 15.8523 14.8993 17.0278 14.8993C18.2033 14.8993 19.1563 15.8523 19.1563 17.0278C19.1563 18.2033 18.2033 19.1563 17.0278 19.1563C15.8523 19.1563 14.8993 18.2033 14.8993 17.0278Z" fill="#C4C3C1" />
        </svg>
          <p className='font-inter text-white   text-sm   '>explore</p></div>
        <div className='flex flex-col items-center transition duration-300 ease-in-out    md:hover:scale-150 group'>
          <svg className=' h-[20px] md:h-[35px]' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path className='group-hover:fill-white' d="M17.5771 2.69666C11.9361 2.69666 7.36047 7.18075 7.36047 12.709C7.36047 20.2182 17.5771 31.3033 17.5771 31.3033C17.5771 31.3033 27.7938 20.2182 27.7938 12.709C27.7938 7.18075 23.2182 2.69666 17.5771 2.69666ZM17.5771 16.2848C15.563 16.2848 13.9283 14.6829 13.9283 12.709C13.9283 10.7351 15.563 9.13316 17.5771 9.13316C19.5913 9.13316 21.226 10.7351 21.226 12.709C21.226 14.6829 19.5913 16.2848 17.5771 16.2848Z" fill="#C4C3C1" />
          </svg >
          <p className='font-inter text-white text-sm transition duration-300 ease-in-out    md:hover:scale-150  '>cities</p></div>
        <div className='flex flex-col items-center transition duration-300 ease-in-out    md:hover:scale-150 group'>
          <svg className=' h-[20px] md:h-[35px]' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
          <path className='group-hover:fill-white' d="M12.9932 17.0278C12.9932 14.4808 15.058 12.4161 17.6049 12.4161C20.1519 12.4161 22.2166 14.4808 22.2166 17.0278C22.2166 19.5747 20.1519 21.6395 17.6049 21.6395C15.058 21.6395 12.9932 19.5747 12.9932 17.0278Z" fill="#C4C3C1" />
          <path className='group-hover:fill-white' fill-rule="evenodd" clip-rule="evenodd" d="M16.8397 2.60882C17.258 2.17597 17.9518 2.17597 18.3702 2.60882L22.0202 6.38542H27.1831C27.7708 6.38542 28.2473 6.86189 28.2473 7.44965V12.6125L32.0239 16.2625C32.4567 16.6809 32.4567 17.3747 32.0239 17.793L28.2473 21.4431V26.6059C28.2473 27.1937 27.7708 27.6701 27.1831 27.6701H22.0202L18.3702 31.4467C17.9518 31.8796 17.258 31.8796 16.8397 31.4468L13.1896 27.6701H8.0268C7.43904 27.6701 6.96257 27.1937 6.96257 26.6059V21.4431L3.18596 17.793C2.75312 17.3747 2.75312 16.6809 3.18596 16.2625L6.96257 12.6125V7.44965C6.96257 6.86189 7.43904 6.38542 8.0268 6.38542H13.1896L16.8397 2.60882ZM17.6049 10.2876C13.8824 10.2876 10.8648 13.3053 10.8648 17.0278C10.8648 20.7503 13.8824 23.7679 17.6049 23.7679C21.3274 23.7679 24.3451 20.7503 24.3451 17.0278C24.3451 13.3053 21.3274 10.2876 17.6049 10.2876Z" fill="#C4C3C1" />
        </svg>
          <p className='font-inter text-white text-sm '>weather</p>
        </div>

      </div>
    </div>
  )
}
