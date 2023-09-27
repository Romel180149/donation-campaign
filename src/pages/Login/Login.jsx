import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

const Login = () => {
  // Initialize price and totalPrice as state variables
  const [price, setPrice] = useState(0); // Example initial price
  const [totalPrice, setTotalPrice] = useState(0); // Example initial total price

  // Simulate dynamic updates to price and totalPrice
  useEffect(() => {
    // Example: Update price and totalPrice every 5 seconds
    const intervalId = setInterval(() => {
      setPrice(Math.random() * 50); // Update price with a random value
      setTotalPrice(Math.random() * 100); // Update totalPrice with a random value
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Create a data array for the pie chart
  const pieChartData = [
    { title: "Price", value: price, color: "#E38627" },
    { title: "Total Price", value: totalPrice, color: "#C13C37" },
  ];

  return (
    <div className="w-50 h-60">
      <PieChart data={pieChartData} />
      <div className="text-center">
        <div>
          <span style={{ color: "#E38627" }}>Donation:</span> {price}
        </div>
        <div>
          <span style={{ color: "#C13C37" }}>Total Donation:</span> {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default Login;
