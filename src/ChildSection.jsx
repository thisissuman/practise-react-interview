import React from "react";

import { useState } from "react";
const ChildSection = ({ title }) => {
  const [visible, setVisible] = useState(false);


  const togglehandeler = () => {
    setVisible(!visible)
  }
  console.log(title);
  return (
    <div>
      <button onClick={togglehandeler}>{visible ? "Hide" :"Show"}</button>
      {visible ? <p>{title}</p> : ""} 
    </div>
  );
};

export default ChildSection;
