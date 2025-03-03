// import { TableColumnsType } from "antd";
// import { DataType } from "../../../assets/data/data.account-details";
// import { EyeInvisibleOutlined } from "@ant-design/icons";

// export const columns: TableColumnsType<DataType> = [
//   {
//     title: "Serial",
//     dataIndex: "serial",
//     align: "center",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     align: "center",
//     render: (text: string, record: DataType) => (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
//           alt={record.name}
//           style={{
//             width: 24,
//             height: 24,
//             borderRadius: "50%",
//             border: "1px solid #CACACA",
//           }}
//         />
//         <h4 style={{ marginLeft: 8 }}>{record.name}</h4>
//       </div>
//     ),
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     align: "center",
//   },
//   {
//     title: "Account Type",
//     dataIndex: "accountType",
//     align: "center",
//   },
//   {
//     title: "Date",
//     dataIndex: "date",
//     align: "center",
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//     align: "center",
//     render: (text: string, record: DataType) => (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 8,
//         }}
//       >
//         <p
//           style={{
//             width: 24,
//             height: 24,
//             padding: 8,
//             border: "1px solid #CACACA",
//             borderRadius: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={() => hanldeUserShow({ text, record })}
//         >
//           <EyeInvisibleOutlined style={{ color: "#010101" }} />
//         </p>
//         <p
//           style={{
//             width: 24,
//             height: 24,
//             padding: 5,
//             border: "1px solid #CACACA",
//             borderRadius: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={() => setDeleteUser(true)}
//         >
//           <UserDeleteOutlined style={{ color: "red" }} />
//         </p>
//       </div>
//     ),
//   },
// ];
