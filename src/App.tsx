import React, { useState } from "react";
import {
  CodeSandboxOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProductOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Layout,
  Menu,
  MenuProps,
  theme,
} from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./components";
import "./App.css";
import "./antd-overwrite.css";
import { BlogIcon } from "./components/icons";
import { useMyProfileQuery } from "./redux/api/auth.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { removeUser } from "./redux/features/auth.slice";
import Private from "./components/private/Private";

// Updated sidebarItems with proper nested structure
const sidebarItems = [
  {
    key: "/",
    icon: <PieChartOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "/orders",
    icon: <BlogIcon />,
    label: "Orders",
    path: "/orders",
  },
  {
    key: "/account-details",
    icon: <TeamOutlined />,
    label: "Accounts Details",
    path: "/account-details",
  },
  {
    key: "/game-list",
    icon: <ProductOutlined />,
    label: "Game List",
    path: "/game-list",
  },
  {
    key: "/blogs",
    icon: <BlogIcon />,
    label: "Blog",
    path: "/blogs",
  },
  {
    key: "/product-price",
    icon: <CodeSandboxOutlined />,
    label: "Products",
    path: "/product-price",
  },

  {
    key: "/Setting",
    icon: <SettingOutlined />,
    label: "Setting",
    children: [
      {
        key: "/privacy-policy",
        icon: <SettingOutlined />,
        label: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        key: "/terms-use",
        icon: <SettingOutlined />,
        label: "Terms of use",
        path: "/terms-use",
      },
    ],
  },
  {
    key: "/logout",
    icon: <LoginOutlined />,
    label: "Logout",
    // path: "/login",
  },
];

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data, isSuccess } = useMyProfileQuery({});

  const dispatch = useDispatch<AppDispatch>();

  const onClick = (e: { key: string }) => {
    if (e.key === "/logout") {
      dispatch(removeUser())
      toast.success("Logout successful");
      navigate('/login')
    }
  };


  // Function to recursively transform menu items
  const transformMenuItem = (item: any) => {
    const transformed = { ...item };

    if (item.path) {
      transformed.label = <Link to={item.path}>{item.label}</Link>;
    }

    if (item.children) {
      transformed.children = item.children.map(transformMenuItem);
    }

    return transformed;
  };

  const transformedSidebarItems = sidebarItems.map(transformMenuItem);

  const items: MenuProps["items"] = [
    {
      key: "user-profile-link",
      label: "profile",
      icon: <UserOutlined />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      key: "user-settings-link",
      label: "settings",
      icon: <SettingOutlined />,
      onClick: () => {
        navigate("/privacy-policy");
      },
    },
    {
      type: "divider",
    },
  ];

  return (
    <Private>
      <Layout style={{ minHeight: "100vh" }} className="app-layout">
        <Sider
          // collapsible
          breakpoint="md"
          // width={320}
          collapsed={collapsed}
          style={{
            paddingInline: `${!collapsed ? "10px" : "4px"}`,
            paddingBlock: "30px",
            backgroundColor: "white",
            overflow: "auto",
          }}
          theme="light"
          onBreakpoint={(broken) => {
            console.log({ broken });
            setCollapsed(broken);
          }}
          onCollapse={() => {
            // console.log(collapsed, type);
          }}
          className={collapsed ? "" : "myClass"}
        >
          <div
            className="demo-logo-vertical"
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[pathname]}
            items={transformedSidebarItems}
            onClick={onClick}
          />
        </Sider>

        {/* Rest of your layout code remains the same */}
        <Layout>
          <Header
            style={{
              padding: "12px",
              background: colorBgContainer,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <h2>Dashboard</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
                <div
                  style={{ fontSize: 18, display: "flex", alignItems: "center" }}
                >
                  {/* <Link to="/notification">
                  <Badge count={5} offset={[0.1, 5]}>
                    <BellOutlined
                      style={{
                        border: "1px solid #efefef",
                        padding: "8px",
                        borderRadius: "50%",
                      }}
                    />
                  </Badge>
                </Link> */}
                </div>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Flex>
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                      size={40}
                      src={data?.data?.image}
                    />
                  </Flex>
                </Dropdown>
              </div>
              <p style={{ fontWeight: 600 }}>{isSuccess ? data?.data?.name : "unknown"}</p>
            </div>
          </Header>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
              background: "#CACACA",
              borderTopLeftRadius: 10,
            }}
          >


            <Outlet />


          </Content>
        </Layout>
      </Layout>
    </Private>
  );
};

export default App;
