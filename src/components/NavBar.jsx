import React from 'react'

const NavBar = () => {
  return (
    <>
        <div className='bg-white w-screen  h-1/5 lg:h-36 flex flex-col lg:flex-row items-center justify-between z-20'>
            <div className='flex 3/4 flex-row items-center justify-start bg-white'>
                <h1 className='text-black bg-white p-10 text-3xl md:text-4xl font-thin'>The Productive Path</h1>
            </div>
            <div className='flex border-b-2 border-b-slate-400 mb-10 mx-10 lg:m-10 w-4/5 lg:w-1/4 flex-row items-center justify-end bg-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="black" className='bg-white w-1/5'>
            <path d="M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21c2.5 0 4.8-.9 6.6-2.4l5.2 5.2c.4.4 1 .4 1.4 0s.4-1 0-1.4l-5.2-5.2c1.5-1.8 2.4-4.1 2.4-6.6C21 4.7 16.3 0 10.5 0zm0 3c4.1 0 7.5 3.4 7.5 7.5S14.6 18 10.5 18 3 14.6 3 10.5 6.4 3 10.5 3z" />
          </svg>                
          <input className='bg-white w-4/5 h-12 outline-none' type="text" placeholder=' Search'/>
            </div>
        </div>
    </>
  )
}

export default NavBar