import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
// import chroma from "chroma-js";
// import Color from "color";

const PhonesCard = ({ phone }) => {
  const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = phone || {};

  const buttonStyle = {
    backgroundColor: 'card_bg',
    
    // Add other CSS properties as needed
  };
  return (
    <div>
      <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: card_bg }}>



        <div className="relative mx-5 mx-auto mt-2 h-75 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={picture} className="h-full w-full object-cover " />
        </div>
        <div className="p-6">

        <button className={` bg-blue-50 font-bold py-2 px-4 rounded-lg`} >
        <p className="block font-sans text-base font-medium leading-relaxed antialiased"
            style={{ color: category_bg }}>
            {category} 
          </p>
        </button>

          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased" style={{ color: category_bg }} >
              <div className={`rounded-b-lg`}>{title}</div>
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">

          </p>
        </div>
        {/* <div className="p-6 pt-0">
          <Link to={`/phones/${title}`} state={category}>
            <button
              className="block bg-gray-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PhonesCard;
