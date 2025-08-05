import React from 'react'
import { useState } from 'react';

export default function Addition() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);

  const enterA = (event) => {
    setA(Number(event.target.value));
  };

  const enterB = (event) => {
    setB(Number(event.target.value));
  };

  const Sum = () => {
    setSum(a + b);
  };

  return (
    <div>
      <input placeholder="a" onChange={enterA} /><br/>
      <input placeholder="b" onChange={enterB} /><br/>
      <button onClick={Sum}>Add</button><br/>
      {sum}
    </div>
  );
}