import React from "react";
import swal from "sweetalert";

const PhoneCard = ({ phone }) => {
  const {
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
    totalPrice,
    id,
  } = phone || {};

  const handleAddToFavorites = () => {
    const addedFavoritesArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    // When there are no favorite items yet
    if (!favoriteItems) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      swal("Good job!", "Product added successfully!", "success");
    } else {
      // Check if the phone is already in favorites
      const isExists = favoriteItems.find((favPhone) => favPhone.title === title);

      if (!isExists) {
        addedFavoritesArray.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Good job!", "Product added successfully!", "success");
      } else {
        swal("You have already donated!", "error");
      }
    }
  };

  // Define dynamic button style based on category_bg
  const buttonStyle = {
    backgroundColor: category_bg, // Set button background color based on category_bg
  };

  const cardStyle = {
    position: "",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "68%",
    height: "auto",
    display: "block",
  };

  const overlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "8",
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "16px",

    boxSizing: "border-box",
  };

  return (
    <div style={cardStyle}>
      <img src={picture} alt="picture" style={imageStyle}/>

      <div style={overlayStyle}>
        <a href="#" className="mt-2">
          <button
            onClick={handleAddToFavorites}
            className={`flex select-none text-white items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            style={buttonStyle}
            type="button"
          >
            DONATE ${price}
          </button>
        </a>
      </div>

      <div className="p-3">
        <h6 className="mb-2 block  font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased text-gray-900">
          {title}
        </h6>
        <p className="mb-0 font-sans text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PhoneCard;
