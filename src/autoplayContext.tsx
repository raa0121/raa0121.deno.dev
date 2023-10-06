import { createContext, useContext, useState } from "../deps.ts";

export const AutoplayContext = createContext();

export function useAutoplayContext() {
  return useContext(AutoplayContext);
}

const AutoplayProvider = ({ children }) => {
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const value = {
    autoplay,
    setAutoplay,
  };
  return (
    <AutoplayContext.Provider value={value}>
      {children}
    </AutoplayContext.Provider>
  );
};
export default AutoplayProvider;
