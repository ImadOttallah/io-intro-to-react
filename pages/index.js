import { useState } from 'react';
import Counter from '../components/Counter';

function Home() {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>Counter Title</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={Counter}>Decrement</button>
      <button type="button" onClick={() => setValue(0)}>Reset</button>
    </>
  );
}

export default Home;
