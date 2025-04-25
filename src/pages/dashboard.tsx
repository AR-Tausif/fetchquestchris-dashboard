import { Card, Col, Row, theme } from "antd";
import {
  DashboardStatusCard,
  DashboardAreaChart,
  DashboardColumnChart,
  DashboardTable,
} from "../components";
import "./styles/dashboard.css";
import { UserOutlined } from "@ant-design/icons";
import "./styles/dashboard-tables.css";
import { useCountsDataQuery } from "../redux/api/baseApi";
const { useToken } = theme

export const Dashboard = () => {
  // and design tokens
  const { token } = useToken();

  const { data } = useCountsDataQuery({}, { refetchOnMountOrArgChange: true });

  const countData = data?.data;

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
              desc={countData?.totalUsers || "0"}
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
