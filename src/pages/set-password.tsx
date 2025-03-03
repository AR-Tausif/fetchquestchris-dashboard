import { SetPasswordForm } from "../components/forms";

export const SetPassword = () => {
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
        Forgot Password
      </h2>
      <SetPasswordForm />
    </div>
  );
};
