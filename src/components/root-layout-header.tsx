// import { Avatar, Badge, Button } from "antd";
// import { Header } from "antd/es/layout/layout";
// import {
//   BellOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// export const RootLayoutHeader = ({
//   colorBgContainer,
//   collapsed,
//   setCollapsed,
// }) => {
//   return (
//     <Header
//       style={{
//         padding: "12px",
//         background: colorBgContainer,
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         // paddingRight: 16,
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <Button
//           type="text"
//           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           onClick={() => setCollapsed(!collapsed)}
//           style={{
//             fontSize: "16px",
//             width: 64,
//             height: 64,
//           }}
//         />
//         <h2 style={{}}>Dashboard</h2>
//       </div>
//       <div
//         className=""
//         style={{ display: "flex", alignItems: "center", gap: 6 }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 25,
//           }}
//         >
//           <div style={{ fontSize: 18, display: "flex", alignItems: "center" }}>
//             <Badge count={5} offset={[0.1, 5]}>
//               {/* <Avatar shape="square" size="large" /> */}
//               <BellOutlined
//                 style={{
//                   border: "1px solid #efefef",
//                   padding: "8px",
//                   borderRadius: "50%",
//                 }}
//               />
//             </Badge>
//           </div>
//           <div>
//             <Avatar
//               style={{ backgroundColor: "#87d068" }}
//               icon={<UserOutlined />}
//               size={40}
//             />
//           </div>
//         </div>
//         <p style={{ fontWeight: 600 }}>Natederwin</p>
//       </div>
//     </Header>
//   );
// };
