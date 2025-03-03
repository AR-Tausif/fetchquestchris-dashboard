import { Button, theme } from "antd";
import { MouseEventHandler, ReactNode } from "react";

export const PrimaryButton = ({
  children,
  className = "",
  type = "button",
  styles,
  onClick,
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  styles?: object;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
}) => {
  const { token } = theme.useToken()
  return (
    <Button
      htmlType={type}
      style={{
        background: "linear-gradient(to right, #DA5DA3 , #5B428A)",
        color: token.colorWhite,
        outline: "none",
        border: "none",
        ...styles,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
