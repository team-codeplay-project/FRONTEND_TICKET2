import React, {useEffect, useState} from "react";
import axios from "axios";

function NFTImages() {
  const [images, setImages] = useState();
  const fetchImages = async () => {
    try {
      let response = await axios.get(
        "https://crimson-reduced-mink-842.mypinata.cloud/ipfs/QmZPHah1wJ5qpGw4SRVUpigTQPMqWMjcjvWrnomAC8FqtJ"
      );

      let nftArray = [];
      nftArray.push({
        image: response.data.image,
        description: response.data.description,
        name: response.data.name,
      });

      setImages(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log(images);

  return (
    <div>
      {images &&
        images.map((v, i) => {
          return (
            <div key={i}>
              <div>{v.description}</div>
              <div>{v.name}</div>
              <img src={v.image} alt="alt" />
            </div>
          );
        })}
    </div>
  );
}

export default NFTImages;
