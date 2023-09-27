import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { setUserFromDb } = useContext(UserContext);

  return (
    <>
      <h2>Login Page</h2>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUserFromDb({
            id: 123,
            name: "Pepito Perez",
            email: "pperez@domain.com",
          })
        }
      >
        Get User
      </button>
    </>
  );
};
