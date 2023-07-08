import React, {useState} from "react";

const DualTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="flex mb-4 text-white">
        <button
          className={`py-2 px-4 w-44 h-16 border-b-2 text-2xl font-bold ${
            activeTab === 1 ? "border-teal-400" : "border-gray-300"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Live
        </button>
        <button
          className={`py-2 px-4 w-44 h-16 border-b-2 text-2xl font-bold ${
            activeTab === 2 ? "border-teal-400" : "border-gray-300"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Past
        </button>
      </div>

      <div className="flex">
        <div className={`w-1/2 ${activeTab === 1 ? "black" : "hidden"}`}>
          <p>Live text</p>
        </div>
        <div className={`w-1/2 ${activeTab === 2 ? "block" : "hidden"}`}>
          <p>Past text</p>
        </div>
      </div>
    </div>
  );
};

export default DualTab;
