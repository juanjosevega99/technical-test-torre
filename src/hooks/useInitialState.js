import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ strengths, setStrengths ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setStrengths(data));
  }, []);
  return strengths;
};

export default useInitialState;
