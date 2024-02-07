import { useState } from "react";

const option = ["Cricket", "Football", "Tennis"];
const day = ["Weekday", "Weekend"];

const RadioPlay = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const opchangehand = (e) => {
    setSelectedOption(e.target.value);
  };
  const daychangehand = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div>
      {option.map((op) => (
        <div>
          <label htmlFor="">{op}</label>
          <input
            type="radio"
            value={op}
            checked={selectedOption === op}
            onChange={opchangehand}
          />
        </div>
      ))}
      {day.map((d) => (
        <div>
          <label htmlFor="">{d}</label>
          <input
            type="radio"
            value={d}
            checked={selectedDay === d}
            onChange={daychangehand}
          />
        </div>
      ))}
      <p>{selectedOption}</p>
      <p>{selectedDay}</p>
    </div>
  );
};

export default RadioPlay;
