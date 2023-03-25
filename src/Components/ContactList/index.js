import React from "react";

const ContactList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b">
      <div className="border-[#E7F6F2] border px-2 py-1 rounded-xl hover:shadow-lg transition-all duration-200 flex">
        <div className="w-1/6 flex justify-center items-center rounded-full">
          <div className="w-16 h-16 bg-red-700 rounded-full">img</div>
        </div>
        <div className="w-5/6">
          <div>Name: Babak jahani</div>
          <div>Number: +9382242035</div>
          <div>Email: Jahanibabak@gmail.com</div>
        </div>
      </div>
      <div className="border-[#E7F6F2] border px-2 py-1 rounded-xl hover:shadow-lg transition-all duration-200 flex">
        <div className="w-1/6 flex justify-center items-center rounded-full">
          <div className="w-16 h-16 bg-red-700 rounded-full">img</div>
        </div>
        <div className="w-5/6">
          <div>Name: Babak jahani</div>
          <div>Number: +9382242035</div>
          <div>Email: Jahanibabak@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
