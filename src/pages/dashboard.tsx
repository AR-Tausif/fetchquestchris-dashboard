import { Card, Col, Row, Select } from "antd";
import {
  DashboardStatusCard,
  DashboardAreaChart,
  DashboardColumnChart,
  DashboardTable,
} from "../components";
import "./styles/dashboard.css";
import { DollarCircleOutlined, UserOutlined } from "@ant-design/icons";
import "./styles/dashboard-tables.css";

export const Dashboard = () => {

  const handleChange = () => {};
  return (
    <Row
      gutter={[0, 16]}
      className="dashboard"
      style={{ background: "#CACACA" }}
    >
      {/* dashboard-status-bar */}
      <Col span={24}>
        <Row gutter={[16, 16]} className="dashboard-status-bar">
          <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
            <DashboardStatusCard
              icon={<UserOutlined style={{ fontSize: 40, color: "#010101" }} />}
              title="Total Users"
              desc="218"
            />
          </Col>
          <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
            <DashboardStatusCard
              icon={
                <DollarCircleOutlined
                  style={{ fontSize: 40, color: "#010101" }}
                />
              }
              title="Total Earning"
              desc="$5,000"
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
                background: "#FDFDFD",
                color: "#FDFDFD",
                border: "none",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5 style={{ fontWeight: 400, fontSize: 20, color: "#010101" }}>
                  User Overview
                </h5>
                <Select
                  defaultValue="2025"
                  style={{
                    width: 120,
                    border: "none",
                    outline: "none",
                    color: "#010101",
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
                background: "#FDFDFD",
                color: "#FDFDFD",
                border: "none",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h5 style={{ fontWeight: 400, fontSize: 20, color: "#010101" }}>
                  Earning Overview
                </h5>
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <p
                    style={{ fontWeight: 400, fontSize: 14, color: "#010101" }}
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
