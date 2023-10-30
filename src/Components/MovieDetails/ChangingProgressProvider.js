import { useState, useEffect } from "react";

const ChangingProgressProvider = ({ values, interval = 1000, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValuesIndex((valuesIndex) => (valuesIndex + 1) % values.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [interval, values.length]);

  return children(values[valuesIndex]);
};

ChangingProgressProvider.defaultProps = {
  interval: 1000,
};

export default ChangingProgressProvider;
