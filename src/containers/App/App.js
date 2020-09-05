import React, { useState } from "react";
import "./App.css";
import orderAxios from "../../orderAxios";
import { useEffect } from "react";
import withPreloader from "../../hoc/withPreloader/withPreloader";

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
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default withPreloader(App, orderAxios);
