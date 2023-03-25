import React from "react";
import { CiUser, CiPhone, CiMail } from "react-icons/ci";

const ContactList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b">
      <div className="border-[#E7F6F2] border px-2 py-1 rounded-xl hover:shadow-lg transition-all duration-200 flex">
        <div className="w-1/6 flex justify-center items-center rounded-full">
          <div className="w-16 h-16 bg-red-700 rounded-full">img</div>
        </div>
        <div className="w-5/6">
          <div className="flex items-center">
            <CiUser className="mr-2" /> Babak Jahani
          </div>
          <div className="flex items-center">
            <CiPhone className="mr-2" /> +98 938 224 2035
          </div>
          <div className="flex items-center">
            <CiMail className="mr-2" /> Jahanibabak@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
