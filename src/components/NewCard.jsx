import React from "react";

const NewCard = (props) => {
  return (
    <div>
      <li>
        <img src={props.img} />
        <h2>{props.watchname}</h2>
      </li>
    </div>
  );
};

export default NewCard;
