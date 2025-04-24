import Sider from "antd/es/layout/Sider";
import { Logo } from "./logo";
import { Menu, MenuProps } from "antd";
import {
  CrownOutlined,
  DollarOutlined,
  FileDoneOutlined,
  LoginOutlined,
  PieChartOutlined,
  ProductOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./styles/root-layout-sidebar.css";

type MenuItem = Required<MenuProps>["items"][number];
const sidebarItems: MenuItem[] = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "9",
    icon: <TeamOutlined />,
    label: "Orders",
  },
  {
    key: "2",
    icon: <TeamOutlined />,
    label: "Accounts Details",
  },
  {
    key: "3",
    icon: <ProductOutlined />,
    label: "Service",
  },
  {
    key: "4",
    icon: <DollarOutlined />,
    label: "Earnings",
  },
  {
    key: "5",
    icon: <CrownOutlined />,
    label: "Manage Subscription",
  },
  {
    key: "6",
    icon: <FileDoneOutlined />,
    label: "Disputed Reviewws",
  },
  {
    key: "7",
    icon: <SettingOutlined />,
    label: "Setting",
  },
  {
    key: "8",
    icon: <LoginOutlined />,
    label: "Logout",
  },
];
export const RootLayoutSidebar = () => {
  return (
    <Sider onBreakpoint={() => {}} onCollapse={() => {}} className="app-sider">
      <div
        className="demo-logo-vertical"
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
      {/* <ul>
          {sidebarItems.map((item) => (
            <li
              key={item.key}
              className={`list-item ${selected ? generateSelectedClassName(item.key) : ""}`}
              id={item.key}
              onClick={(e)=>handleSelect(e)}
            >
              <p className="icon">{item.icon}</p>
              <p>{item.label}</p>
            </li>
          ))}
        </ul> */}
      {/* <Menu
          mode="vertical"
          selectedElementId={[selectedKeys]}
          onSelect={handleMouseSelectElement}
        >
          {sidebarItems.map((item) => (
            <Menu.Item
              key={item.key}
             
              className={generateSelectedClassName(item.key)}
            >
              <p>{item.label}</p>
              <p>{item.label}</p>
            </Menu.Item>
          ))}
        </Menu> */}
    </Sider>
  );
};
