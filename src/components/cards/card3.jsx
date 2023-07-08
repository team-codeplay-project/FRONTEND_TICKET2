import React from "react";

const Card3 = ({image, description, name}) => {
  return (
    <div className="rounded-lg shadow-lg p-4 flex bg-black text-white">
      <img
        src={image}
        alt=""
        className="w-40 h-32 bg-blue-100 rounded-md mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <div className="flex justify-end">
          <ul className="list-disc pl-6">{description}</ul>
        </div>
      </div>
    </div>
  );
};

export default Card3;
