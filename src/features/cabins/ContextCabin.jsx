import React, { createContext, useState } from 'react';

export const CabinContext = createContext();

export const CabinProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

 
  const toggleCreateForm = () => {
    console.log("Toggling form", isFormOpen); // نمایش وضعیت قبل از تغییر
    setIsFormOpen(prev => !prev);
  };
  

  return (
    <CabinContext.Provider value={{ isFormOpen, toggleCreateForm }}>
      {children}
    </CabinContext.Provider>
  );
};
