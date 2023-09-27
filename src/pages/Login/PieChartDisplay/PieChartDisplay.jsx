import React, { useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import PieChartDisplay from "../PieChartDisplay";

const PhoneCardContainer = () => {
  const [donationData, setDonationData] = useState({
    price: 0,
    totalPrice: 0,
  });

  const handleDonate = (newDonation) => {
    const newPrice = donationData.price + newDonation;
    const newTotalPrice = donationData.totalPrice + newDonation;
    setDonationData({ price: newPrice, totalPrice: newTotalPrice });
  };

  return (
    <div>
      <PhoneCard onDonate={handleDonate} />
      <PieChartDisplay donationData={donationData} />
    </div>
  );
};

export default PhoneCardContainer;
