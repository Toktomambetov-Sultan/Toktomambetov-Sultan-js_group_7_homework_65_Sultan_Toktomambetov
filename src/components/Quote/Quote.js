import React from "react";
import "./Quote.css";
import { categories } from '../../Constants';
const Quote = ({quote}) => {
  return (
    <div className="quote">
      <p className="quote__text">{quote.text}</p>
      <span className="quote__category">
        Category:{" "}
        {categories.find((item) => item.id === quote.category).name}
      </span>
      <span className="quote__author">-{quote.author}</span>
    </div>
  );
};

export default Quote;
