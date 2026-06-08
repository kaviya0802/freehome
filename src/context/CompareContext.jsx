import { createContext, useContext, useEffect, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {

  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("compareProperties");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "compareProperties",
      JSON.stringify(selected)
    );
  }, [selected]);

  const toggleProperty = (property) => {

    const exists = selected.find(
      (p) => p.id === property.id
    );

    if (exists) {
      setSelected((prev) =>
        prev.filter((p) => p.id !== property.id)
      );
      return true;
    }

    if (selected.length >= 3) {
      return false;
    }

    setSelected((prev) => [...prev, property]);

    return true;
  };

  const clearCompare = () => {
    setSelected([]);
    localStorage.removeItem("compareProperties");
  };

  return (
    <CompareContext.Provider
      value={{
        selected,
        toggleProperty,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () =>
  useContext(CompareContext);