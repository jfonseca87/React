import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary">
        Reset
      </button>

      <div className="mt-2">{JSON.stringify(formState)}</div>
    </>
  );
};
