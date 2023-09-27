import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Login = () => {
  const [donations, setDonations] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [chartData, setChartData] = useState([]);



  const handleAddToFavorites = (price) => {
    // Update total price
    setTotalPrice(totalPrice + price);

    // Update chart data
    setChartData([...chartData, price]);
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const chartDataObject = {
    labels: chartData.map((_, index) => `Donation ${index + 1}`),
    datasets: [
      {
        label: 'Donation Amount',
        data: chartData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {donations.map((donation, index) => (
        <p key={index} className="mt-2">
          <button
            onClick={() => handleAddToFavorites(donation.price)}
            className={`flex select-none text-white items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type="button"
          >
            DONATE ${donation.price}
          </button>
        </p>
      ))}
      
      <div className="mt-4">
        <h2>Total Donation: ${totalPrice}</h2>
      </div>
      <div className="mt-4">
        <Bar data={chartDataObject} options={chartOptions} />
      </div>
    </div>
  );
};

export default Login;
