import { LoginForm } from "../components/forms";
import "./styles/login.css";
export const Login = () => {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        maxWidth: 500,
        width: 400,
      }}
    >
      <h2 style={{ textAlign: "center", fontWeight: 700, padding: "10px 0" }}>
        Login
      </h2>
      <LoginForm />
    </div>
  );
};
