import { Card, Col, Row, Select, theme } from "antd";
import {
  DashboardStatusCard,
  DashboardAreaChart,
  DashboardColumnChart,
  DashboardTable,
} from "../components";
import "./styles/dashboard.css";
import { DollarCircleOutlined, UserOutlined } from "@ant-design/icons";
import "./styles/dashboard-tables.css";
const { useToken } = theme

export const Dashboard = () => {
  // and design tokens
  const { token } = useToken();
  const handleChange = () => { };
  return (
    <Row
      gutter={[0, 16]}
      className="dashboard"
    >
      {/* dashboard-status-bar */}
      <Col span={24}>
        <Row gutter={[16, 16]} className="dashboard-status-bar">
          <Col span={24}>
            <DashboardStatusCard
              icon={<UserOutlined style={{ fontSize: token.fontSize * 2.5, color: token.colorTextBase }} />}
              title="Total Users"
              desc="218"
            />
          </Col>
        </Row>
      </Col>

      {/* dashboard-chart-section */}
      <Col span={24}>
        <Row gutter={[16, 16]} className="dashboard-chart-section">
          <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
            <Card
              style={{
                background: token.colorBgContainer,
                border: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5 style={{ fontWeight: 400, fontSize: token.fontSize * 1.25, color: token.colorText }}>
                  User Overview
                </h5>
                <Select
                  defaultValue="2025"
                  className="w-[120px] b-none outline-none"
                  style={{
                    color: token.colorText,
                  }}
                  onChange={handleChange}
                  options={[
                    { value: "2024", label: "2024" },
                    { value: "2025", label: "2025" },
                    { value: "2026", label: "2026" },
                  ]}
                />
              </div>
              <DashboardAreaChart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
            <Card
              style={{
                background: token.colorBgContainer,
                color: token.colorWhite,
                border: "none",
              }}
            >
              <div
                className="flex justify-between items-center"
              >
                <h5 style={{ fontWeight: 400, fontSize: token.fontSize * 1.25, color: token.colorText }}>
                  Earning Overview
                </h5>
                <div
                  className="flex items-center gap-10"
                >
                  <p
                    style={{ fontWeight: 400, fontSize: token.fontSize * 0.875, color: token.colorText }}
                  >
                    Monthly Growth: 35.80%
                  </p>
                  <Select
                    defaultValue="2025"
                    style={{ width: 120, border: "none", outline: "none" }}
                    onChange={handleChange}
                    options={[
                      { value: "2024", label: "2024" },
                      { value: "2025", label: "2025" },
                      { value: "2026", label: "2026" },
                    ]}
                  />
                </div>
              </div>
              <DashboardColumnChart />
            </Card>
          </Col>
        </Row>
      </Col>

      {/* dashboard-table-section */}
      <Col span={24}>
        <DashboardTable />
      </Col>
    </Row>
  );
};
