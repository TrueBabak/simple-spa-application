import React from "react";

const MainHeader = () => {
  return (
    <div className="flex justify-center items-center border-b mb-4 pb-4 relative">
      <div className="text-3xl font-bold font-mono text-[#585858]">
        ContactList
      </div>
      <div className="flex items-center absolute right-10 text-lg">
        <div>Total:</div>
        <div className="bg-[#395B64] text-[#E7F6F2] w-6 h-6 flex items-center justify-center rounded-full mx-2">
          3
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
