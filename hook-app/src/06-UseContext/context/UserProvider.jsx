import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setUserFromDb = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setUserFromDb }}>
      {children}
    </UserContext.Provider>
  );
};
