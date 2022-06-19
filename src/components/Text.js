import { useState } from "react";

const Text = ({ text = "123", defaultParameter = 0 }) => {
  const [counter, setCounter] = useState(defaultParameter);
  const onChange = (increment) => {
    setCounter(counter + increment);
  };

  return (
    <div>
      <p>{text}</p>
      <h2>{counter}</h2>
      <button onClick={() => onChange(-1)}>dec value</button>
      <button onClick={() => onChange(1)}>increment value</button>
      <button onClick={() => onChange(5)}>add 5</button>
    </div>
  );
};
export default Text;
