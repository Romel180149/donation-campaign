import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
// import chroma from "chroma-js";
// import Color from "color";

const PhonesCard = ({ phone }) => {
  const { picture, title, category, category_bg, card_bg, text_button_bg, description, price } = phone || {};

 
  return (
    <div>
      <div>
        <Link to={`/phones/${title}`} state={category}>
          <button type="button" >
            <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: card_bg }}>


              <div className="relative mx-5 mx-auto mt-2 h-75 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img src={picture} className="h-full w-full object-cover " />
              </div>
              <div className="p-6">

                <button className={` bg-blue-50 font-bold py-2 px-2 rounded-lg`} >
                  <p className="block font-sans text-base font-medium leading-relaxed antialiased"
                    style={{ color: category_bg }}>
                    {category}
                  </p>
                </button>

                <div className="mb-2 flex items-center justify-between">
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased" style={{ color: category_bg }} >
                    <div className={`rounded-b-lg`}>{title}</div>
                  </p>
                 
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">

                </p>
              </div>

            </div>
          </button>
        </Link>


      </div>
    </div>
  );
};

export default PhonesCard;
