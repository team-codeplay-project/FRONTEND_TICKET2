import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Rafflecard.css";

const Rafflelist = ({ account }) => {
  const [raffle, setRaffle] = useState("");
  const [t_data, setT_Data] = useState();

  // post 넣기 , get 가져오기
  const get_Raffle_Data = async () => {
    try {
      const response = await axios.get("경로");
      console.log(response);
      // setRaffle( respose)
    } catch (error) {
      console.log(error);
    }
  };

  const step1 = () => {
    const t = [1, "a", 3];
    setT_Data(t);
    console.log(t);
  };

  const step2 = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/raffle`,
      {
        test: t_data,
      }
    );
  };

  const step3 = async () => {
    console.log(`${process.env.REACT_APP_BACKEND_URL}/raffle`);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
      price: "1",
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
      price: "1",
    },
  ];

  const handleRaffleClick = (productId) => {
    console.log(`Raffle clicked for product ${productId}`);
  };

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      <div className="flex flex-col justify-center items-center">
        <Link to="/test/1">1번 래플!</Link>
        <Link to="/test/2">2번 래플</Link>
        <button onClick={step1}>step1</button>
        <button onClick={step2}>step2</button>
        <button onClick={step3}>step3</button>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleRaffleClick(product.id)}>
              Enter Raffle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rafflelist;
