import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between border-b mb-4 pb-4">
      <a
        href="/"
        className="border px-4 py-2 rounded-xl border-[#395B64] hover:bg-[#395B64] hover:text-[#E7F6F2] transition-all duration-150"
      >
        Home
      </a>
      <a
        href="/"
        className="border px-4 py-2 rounded-xl border-[#395B64] hover:bg-[#395B64] hover:text-[#E7F6F2] transition-all duration-150"
      >
        Add Contact
      </a>
    </div>
  );
};

export default Header;
