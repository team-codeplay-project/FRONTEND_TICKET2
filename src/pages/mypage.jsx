import React from "react";
import MyPageMenu from "../components/mypagemenu";
import UserButton from "../components/userbutton";
import MyPageTitle from "../components/mypagetitle";
import LogOut from "../components/logout";
import GoBack from "../components/goback";

const MyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="h-full bg-black shadow-xl rounded-3xl p-4"
        style={{width: "320px"}}
      >
        <div className="flex justify-start ml-6">
          <GoBack />
          <MyPageTitle />
        </div>
        <UserButton />
        <MyPageMenu />
        <LogOut />
      </div>
    </div>
  );
};

export default MyPage;
