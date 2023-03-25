import axios from "axios";
import React from "react";

const App = () => {
  axios.get("/contact").then((res) => console.log(res.data));
  return (
    <div>
      <div>App</div>
    </div>
  );
};

export default App;
