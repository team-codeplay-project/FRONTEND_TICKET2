import React from "react";
import {ImUser} from "react-icons/im";

function UserButton() {
  const handleClick = (buttonName) => {
    console.log(buttonName + "이 클릭되었습니다.");
  };

  return (
    <div className="flex flex-col justify-center items-center ml-64 mt-4 text-4xl">
      <button
        className="flex items-center justify-center btn w-12 h-12 mt-4 mr-4 bg-black text-white rounded-3xl "
        onClick={() => handleClick("User 버튼")}
      >
        <ImUser />
      </button>
    </div>
  );
}

export default UserButton;
