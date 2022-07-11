import { useState } from 'react';

export default function Counter() {
  const setValue = useState(0);
  return (
    setValue((prevState) => prevState - 1)
  );
}
