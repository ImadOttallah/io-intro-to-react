import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Counter({ title }) {
  const [value, setValue] = useState(0);
  console.warn(title);
  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
      {value !== 0 ? (
        <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>
          Decrement
        </button>
      ) : (
        ''
      )}
      <button type="button" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
}
export default Counter;
Counter.propTypes = {
  title: PropTypes.string.isRequired,
};
