import Card3 from "../components/cards/card3";
import MyPageTap from "../components/mypagetap";
import NFTImages from "../components/cards/card4";
import React, {useEffect, useState} from "react";
import axios from "axios";

const MyPage = () => {
  const ticketData = [
    {
      image: "경로/이미지1.jpg",
      dependencies: ["Date & Time", "Place", "Price"],
    },
    {
      image: "경로/이미지2.jpg",
      dependencies: ["Date & Time", "Place", "Price"],
    },
    {
      image: "경로/이미지3.jpg",
      dependencies: ["Date & Time", "Place", "Price"],
    },
    {
      image: "경로/이미지4.jpg",
      dependencies: ["Date & Time", "Place", "Price"],
    },
    {
      image: "경로/이미지5.jpg",
      dependencies: ["Date & Time", "Place", "Price"],
    },
  ];

  const [images, setImages] = useState();
  const [datas, setDatas] = useState();
  const [names, setNames] = useState();
  const fetchImages = async () => {
    try {
      let response = await axios.get("");

      setImages(response.data.images);
      setDatas(response.data.description);
      setNames(response.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log(images);

  return (
    <div className="flex flex-col flex-wrap justify-center">
      <h1 className="text-4xl bg-black text-white font-bold ml-4">Tickets</h1>
      <MyPageTap />
      <NFTImages />
      {ticketData.length === 0 ? (
        <p className="text-xl text-center mt-4">You have no tickets</p>
      ) : (
        ticketData.map((images, index) => (
          <Card3
            key={index}
            image={images.image}
            description={images.description}
            name={images.name}
          />
        ))
      )}
    </div>
  );
};

export default MyPage;
