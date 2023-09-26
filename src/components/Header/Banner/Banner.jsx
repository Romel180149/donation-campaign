import React from 'react';

const Banner = () => {
  return (
    <div className='relative h-[70vh]'>
      
      <img
        src="https://i.ibb.co/LCW7Y22/Rectangle-4281.png"
        alt="Overlay Image"
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      <div className='items-center text-center py-10'>
      <h2 className='items-center text-4xl font-bold'>I Grow By Helping People In Need</h2>
      {/* <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" /> */}
      <div className='relative w-50 mt-20'>
      <input type="search" name="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-white focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required=""></input>
      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
