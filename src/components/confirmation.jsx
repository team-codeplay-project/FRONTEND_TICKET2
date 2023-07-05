import React from "react";

const TicketConfirmPage = () => {
  const handleClick = (buttonName) => {
    console.log(buttonName + "이 클릭되었습니다.");
  };

  return (
    <div className="flex flex-col items-center justify-center opacity-85">
      <div
        className="h-full bg-black shadow-xl mt-28 rounded-3xl p-6 "
        style={{width: "320px"}}
      >
        <div className="flex flex-col mt-14">
          <div className="text-white mt-64 mb-6 ">
            <p class="text-2xl font-bold mb-5">Thank you!</p>
            <p class="text-gray-400 mb-1">YOU'RE GOING TO</p>
            <p class="text-lg font-bold mb-5">KIA TIGERS VS DOOSAN</p>
            <p class="text-gray-400 mb-1">jun 4 11:00PM</p>
            <p class="text-gray-400 mb-1">종합운동장, 잠실</p>
            <p class="text-gray-400">15000</p>
          </div>
          <button
            className="bg-transparent bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-400 text-xl font-bold py-3 mb-2 rounded-full"
            onClick={() => handleClick("View Ticket 버튼")}
          >
            View Ticket
          </button>
          <button
            className="bg-transparent bg-blue-500 hover:bg-blue-600 hover:text-white text-gray-400 text-xl font-bold py-3 mb-2 rounded-full"
            onClick={() => handleClick("Close 버튼")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmPage;
