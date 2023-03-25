import React from "react";
import Header from "./Header";
import MainHeader from "./MainHeader";

const HeaderLayout = () => {
  return (
    <div className="w-5/6 mx-auto bg-[#A5C9CA] px-4 py-4 rounded-lg">
      <MainHeader />
      <Header />
    </div>
  );
};

export default HeaderLayout;
