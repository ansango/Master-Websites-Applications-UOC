import React from "react";
import Card from "../../Components/Card/";
import Quote from "../../Components/Quote";
import members from "../../Data/members";
import quotes from "../../Data/quotes";

const Band = () => {
  return (
    <div className="view view_band">
      <div className="container title-container">
        <h1>{"HELLO WE ARE..."}</h1>
      </div>
      <div className="container notes-container">
        {quotes.map((quote, index) => {
          return (
            <Quote
              key={index}
              url={quote.url}
              content={quote.content}
              author={quote.author}
              cite={quote.cite}
              position={quote.position}
            />
          );
        })}
      </div>
      <div className="container title-container text-center">
        <h2>
          <code className="text-primary fw-bold">!==</code>
        </h2>
      </div>
      <div className="cards-container">
        {members.map((member, index) => {
          return (
            <Card
              key={index}
              name={member.name}
              position={member.position}
              thumb={member.thumb}
              love={member.love}
              twitter={member.twitter}
              icon={member.icon}
              emoji={member.emoji}
            />
          );
        })}
      </div>
      <div className="container py-5">
        <h3 className="py-3">
          {
            "We were born in Berlin, we make noise, we like noise, we can't stop making noise. Sometimes we do quieter things, but only when we have a hangover on Fridays."
          }
        </h3>
        <h3 className="py-3">
          {
            "Covid has kept us from touring, but when it's over, you can find us in basements, garages, churches, abandoned churches, discotheques, country bars, posh places, punk places and wherever there's a plug and wifi."
          }
        </h3>
        <h3 className="py-3">
          {
            "We like books, ipa punk beer, bikes, skateboarding and busting tympani."
          }
        </h3>
        <h3 className="py-3">{"We hope to see you soon. xxx"}</h3>
      </div>
    </div>
  );
};

export default Band;
