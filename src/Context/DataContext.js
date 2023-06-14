import { createContext } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}
