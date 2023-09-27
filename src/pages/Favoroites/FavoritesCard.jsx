import React from 'react';

const FavoritesCard = ({ phone }) => {
  const { picture, title, category, category_bg, card_bg, price } = phone || {};
  const buttonStyle = {
    backgroundColor: category_bg,
  };

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: card_bg }}>
      <div className="flex">
        <div className="w-1/3 relative">
          <img src={picture} className="h-full w-full object-cover" alt={title} />
        </div>
        <div className="w-2/3 p-6">
          <button className="pr-48 mr-4">
            <p className="block border font-sans text-base font-medium leading-relaxed antialiased" style={{ color: category_bg }}>
              <button style={{ color: category_bg }}> <small>{category}</small></button>
            </p>
          </button>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased" style={{ color: category_bg }}>
              <div className="font-bold">{title}</div>
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            ${price}
          </p>
          <a href="#" className="inline-block mb-8">
            <button
              className={`flex select-none  text-white items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
              style={buttonStyle}
              type="button"
            >
              View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
