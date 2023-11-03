import React, { createContext, useState } from "react";
import { dynamiCss } from "../global/dynamicCss";

export const PortContext = createContext(null);
const PortContextProvider = ({ children }) => {
  const [activeLightTheme, setActiveLightTheme] = useState(false);
  const dynamicColor = activeLightTheme
    ? dynamiCss.light.second
    : dynamiCss.dark.second;
  return (
    <PortContext.Provider
      value={{ activeLightTheme, setActiveLightTheme, dynamicColor }}
    >
      {children}
    </PortContext.Provider>
  );
};

export default PortContextProvider;
