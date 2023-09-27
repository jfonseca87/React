import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>Home Page</h2>

      <h3>Hello {user?.name}</h3>
    </>
  );
};
