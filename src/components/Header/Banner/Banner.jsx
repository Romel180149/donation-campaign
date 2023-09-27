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
        <h2 className='text-4xl font-bold'>I Grow By Helping People In Need</h2>
       

<div className='relative mt-10 md:mt-20 flex items-center justify-center'>
  <input
    type="search"
    name="search"
    id="default-search"
    className="block w-60 p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-red-500 focus:border-red-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Search here..."
    required=""
  />
  <button
    type="submit"
    className="text-white ml-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 h-[48px]" // Adjust the height here
  >
    Search
  </button>
</div>







      </div>
    </div>
  );
};

export default Banner;
