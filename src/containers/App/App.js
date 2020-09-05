import React, { useState } from "react";
import "./App.css";
import orderAxios from "../../orderAxios";

function App() {
  const [quotes, setQoutes] = useState([]);
  const initQoutes = async () => {
    const response = await orderAxios.get("qoutes.json");
    setQoutes(
      Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }))
    );
  };
  return <div className="App">1</div>;
}

export default App;
