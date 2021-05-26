import React from "react";
import quotes from "../../data/quotes";
import Quote from "../Quote";

const notes = quotes.map((quote, index) => (
  <Quote
    key={index}
    url={quote.url}
    content={quote.content}
    author={quote.author}
    cite={quote.cite}
    position={quote.position}
  />
));

const Notes = () => {
  return <div className="notes">{notes}</div>;
};

export default Notes;
