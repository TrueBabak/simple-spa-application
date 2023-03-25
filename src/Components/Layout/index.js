import React from "react";
import ContactList from "../ContactList";
import MainHeader from "../Header";

const Layout = () => {
  return (
    <div className="w-5/6 mx-auto bg-[#A5C9CA] px-4 py-4 rounded-lg">
      <MainHeader />
      <ContactList />
      <div>App</div>
    </div>
  );
};

export default Layout;
