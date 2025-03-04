import { Card, theme } from "antd";
import { ReactNode } from "react";

export const DashboardStatusCard = ({
  icon,
  desc,
  title,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => {
  const { token } = theme.useToken()
  return (
    <Card style={{ color: "#FDFDFD", border: "none", background: token.colorPrimary }}>
      <div className="" style={{ display: "flex", alignItems: "center" }}>
        <div
          className=""
          style={{
            width: "72px",
            height: 71,
            background: "#E6E6FA",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
        <div style={{ marginLeft: 16 }}>
          <p style={{ fontWeight: 400, fontSize: 24, lineHeight: "28.8px" }}>
            {title}
          </p>
          <h3
            style={{ fontWeight: 600, fontSize: "32px", lineHeight: "38.4px" }}
          >
            {desc}
          </h3>
        </div>
      </div>
    </Card>
  );
};
