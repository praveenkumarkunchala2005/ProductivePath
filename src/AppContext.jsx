import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("All Posts");
  const navigate = useNavigate();
  
  const handleClick = (newCategory) => {
    if (newCategory !== category) {
      setCategory(newCategory);
      navigate("/");
    }
  };

  return (
    <AppContext.Provider value={{ category, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
