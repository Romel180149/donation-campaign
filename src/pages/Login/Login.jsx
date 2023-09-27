import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import PhoneCard from "../Phone/PhoneCard";

const Login = () => {
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDonate = () => {
    const newPrice = price + Math.random() * 10; // Add a random donation amount
    const newTotalPrice = totalPrice + newPrice; // Update total donation amount
    setPrice(newPrice);
    setTotalPrice(newTotalPrice);
  };

  const pieChartData = [
    { title: "Donation", value: price, color: "#E38627" },
    { title: "Total Donation", value: totalPrice, color: "#C13C37" },
  ];

  return (
    <div className="w-50 h-60">
      <PieChart data={pieChartData} />
      <div className="text-center">
        <div>
          <span style={{ color: "#E38627" }}> Your Donation:</span> {price}
        </div>
        <div>
          <span style={{ color: "#C13C37" }}>Total Donation:</span> {totalPrice}
        </div>
        <button onClick={handleDonate}>Donate</button>
      </div>
    </div>
  );
};

export default Login;
