import axios from "axios";
import React from "react";
import Layout from "../Components/Layout";

const App = () => {
  axios.get("/contact").then((res) => console.log(res.data));
  return (
    <div className="bg-[#E7F6F2] h-screen pt-10">
      <Layout />
    </div>
  );
};

export default App;
