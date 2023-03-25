import React from "react";
import { CiUser, CiPhone, CiMail, CiTrash, CiEdit } from "react-icons/ci";

const ContactItem = () => {
  return (
    <div className="border-[#E7F6F2] border px-2 py-3 rounded-xl hover:shadow-lg transition-all duration-200 flex relative">
      <div className="w-1/6 flex justify-center items-center rounded-full relative">
        <div className="w-16 h-16 bg-[#395B64] text-[#E7F6F2] rounded-full flex justify-center items-center cursor-pointer">
          <div>img</div>
        </div>
      </div>
      <div className="w-3/6 ml-8">
        <div className="flex items-center cursor-pointer">
          <CiUser className="mr-2" /> Babak Jahani
        </div>
        <div className="flex items-center cursor-pointer">
          <CiPhone className="mr-2" /> +98 938 224 2035
        </div>
        <div className="flex items-center cursor-pointer">
          <CiMail className="mr-2" /> Jahanibabak@gmail.com
        </div>
      </div>
      <div className="absolute top-3 right-3 flex">
        <CiEdit className="text-lg hover:text-green-700 font-bold mx-1" />
        <CiTrash className="text-lg hover:text-red-700 font-bold mx-1" />
      </div>
    </div>
  );
};

export default ContactItem;
