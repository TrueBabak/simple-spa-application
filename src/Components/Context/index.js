import { createContext } from "react";
import { ContextApi } from "./ContextData";

export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  return (
    <Context.Provider
      value={{
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
