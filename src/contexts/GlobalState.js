import React, { createContext, useReducer } from "react";
import { AppReducer } from "../reducers/AppReducer";

// inital state
const initialState = {
  transactions: [
    { id: 1, detail: "Salary", amount: 300 },
    { id: 2, detail: "Books", amount: -20 },
    { id: 3, detail: "Chairs", amount: 180 },
  ],
};

// Global context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalContext.Provider>
  )
};
