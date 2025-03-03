import { theme } from "antd";
import { ForgotPasswordForm } from "../components/forms";

export const ForgotPassword = () => {
  const { token } = theme.useToken()
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
      <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: token.fontSize * 1.625, padding: "10px 0" }}>
        Forgot Password
      </h2>
      <ForgotPasswordForm />
    </div>
  );
};
