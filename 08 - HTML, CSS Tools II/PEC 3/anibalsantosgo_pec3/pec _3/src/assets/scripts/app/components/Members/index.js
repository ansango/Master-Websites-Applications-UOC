import React from "react";
import members from "../../data/members";
import Card from "../Card";

const band = members.map((member, index) => (
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
));

const Members = () => {
  return <div className="members">{band}</div>;
};

export default Members;
