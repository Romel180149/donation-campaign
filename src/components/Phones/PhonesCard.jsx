import React from "react";
import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
    totalPrice,
  } = phone || {};

  const cardStyle = {
    backgroundColor: card_bg,
    textColor: card_bg,
  };

  const overlayStyle = {
    backgroundColor: card_bg, // Set the overlay background color dynamically
    opacity: 0.7, // You can adjust the opacity as needed
  };

  return (
    <div>
      <div>
        <Link to={`/phones/${title}`} state={category}>
          <button type="button">
            <div
              className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              style={cardStyle}
            >
              <div className="relative mx-5 mx-auto mt-2 h-75 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img src={picture} className="h-full w-full object-cover px-0 mt-0" />
              </div>
              <div className="p-6">
                <button className="pr-48 mr-2 border" style={cardStyle}>
                  <p
                    className="block font-sans text-base font-medium leading-relaxed antialiased"
                    style={{ color: category_bg }}
                  >
                    <button className=""><small>{category}</small></button>
                  </p>
                </button>
                <div className="overlay" style={overlayStyle}></div> {/* Overlay */}
                <div className="mb-2 flex items-center justify-between">
                  <p
                    className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
                    style={{ color: category_bg }}
                  >
                    <div className={`font-bold`}>{title}</div>
                  </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"></p>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhonesCard;
