import React from "react";
import { useContext, useState } from "react";

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [searchedProducts, setSearchedProducts] = useState([]);

  return (
    <SearchContext.Provider value={{ searchedProducts, setSearchedProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
