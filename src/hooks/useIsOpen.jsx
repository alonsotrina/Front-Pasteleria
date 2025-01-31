import { useState } from 'react';

function useIsOpen() {
  const [state, setState] = useState({
    modalOpen: false,
  });

  const toggle = (key) => {
    setState((prevState)=>({
      ...prevState,
      [key]: !prevState[key]

    }))
  };
  

  console.log('state', state) 
  return { state, toggle };
}

export default useIsOpen;