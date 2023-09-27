import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>About Page</h2>

      <h3>Hello {user?.name}</h3>
    </>
  );
};
