import { useEffect, useState } from "react";

// const useLocalStorage = (key, firstValue = null) => {
//   const initial_value = localStorage.getItem(key) || firstValue;
//   const [state, setState] = useState(initial_value);
//   useEffect(() => {
//     if (state == null) {
//       localStorage.removeItem(key);
//     } else {
//       localStorage.setItem(key, state);
//     }
//   }, [key, state]);
//
//   return [state, setState];
// };
// export default useLocalStorage;
function useLocalStorage(key, firstValue = null) {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState(initialValue);

  useEffect(
    function setKeyInLocalStorage() {
      if (item === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, item);
      }
    },
    [key, item],
  );

  return [item, setItem];
}

export default useLocalStorage;
