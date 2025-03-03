import { Button } from "antd";
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
  return (
    <Button
      htmlType={type}
      style={{
        background: "linear-gradient(to right, #9D0DFE , #AA7AD6,  #E6E6FA)",
        color: "#FDFDFD",
        outline:"none",
        border:"none",
        ...styles,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
