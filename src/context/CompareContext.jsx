import { createContext, useContext, useEffect, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  // ✅ reactive user state
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );

 const COMPARE_KEY =
  currentUser?.id
    ? `compareProperties_${currentUser.id}`
    : "compare_guest";

  const [selected, setSelected] = useState([]);

  // 🔥 1. Load compare list whenever user changes
 useEffect(() => {
  if (!COMPARE_KEY) {
    setSelected([]);
    return;
  }

  try {
    const saved =
      localStorage.getItem(
        COMPARE_KEY
      );

    setSelected(
      saved
        ? JSON.parse(saved)
        : []
    );

  } catch (error) {

    console.log(
      "Compare load error",
      error
    );

    setSelected([]);

    localStorage.removeItem(
      COMPARE_KEY
    );
  }

}, [COMPARE_KEY]);
  // 🔥 2. Listen for login/logout changes (same tab + other tabs)
   useEffect(() => {
  const syncUser = () => {
    try {
      const user = JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

      setCurrentUser(user || null);

    } catch {
      setCurrentUser(null);
    }
  };

  syncUser();

  window.addEventListener(
    "focus",
    syncUser
  );

  window.addEventListener(
    "storage",
    syncUser
  );

  return () => {
    window.removeEventListener(
      "focus",
      syncUser
    );

    window.removeEventListener(
      "storage",
      syncUser
    );
  };
}, []);
  // 🔥 3. Save compare list per user
  useEffect(() => {
    if (!COMPARE_KEY) return;

    localStorage.setItem(COMPARE_KEY, JSON.stringify(selected));
  }, [selected, COMPARE_KEY]);

  // 🔥 4. Toggle property
 const toggleProperty = (property) => {
  try {
    let success = true;

    setSelected((prev) => {
      const safePrev = Array.isArray(prev)
        ? prev
        : [];

      const exists =
        safePrev.some(
          (p) =>
            String(p.id) ===
            String(property.id)
        );

      if (exists) {
        return safePrev.filter(
          (p) =>
            String(p.id) !==
            String(property.id)
        );
      }

      if (safePrev.length >= 3) {
        success = false;
        return safePrev;
      }

      return [
        ...safePrev,
        {
          ...property,
          id: String(property.id),
        },
      ];
    });

    return success;

  } catch (e) {
    console.log(e);
    return false;
  }
};

  // 🔥 5. Clear compare (safe per user)
  const clearCompare = () => {
    setSelected([]);

    if (COMPARE_KEY) {
      localStorage.removeItem(COMPARE_KEY);
    }
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

export const useCompare = () => useContext(CompareContext);