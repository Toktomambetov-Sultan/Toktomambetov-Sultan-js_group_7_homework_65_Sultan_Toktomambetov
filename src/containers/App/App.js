import React, { useState } from "react";
import "./App.css";
import orderAxios from "../../orderAxios";
import { useEffect } from "react";

function App() {
  const [quotes, setQoutes] = useState([]);
  const initQoutes = async () => {
    const response = await orderAxios.get("/quotes.json");
    setQoutes(
      Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }))
    );
  };
  useEffect(() => {
    initQoutes();
    console.log("[update]");
  }, []);
  console.log(quotes);
  return (
    <div className="App">
      {quotes.map((quote) => (
        <li key={quote.id}>{quote.text}</li>
      ))}
    </div>
  );
}

export default App;
