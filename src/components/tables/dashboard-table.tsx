import { Table, Select, Avatar } from "antd";
import { EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteActionButtons } from "../cards/delete-action-card";

export const DashboardTable = () => {
  const [deleteUser, setDeleteUser] = useState(false);

  const data = [
    {
      key: "1",
      serial: "#01",
      name: "Robert Fox",
      email: "email@gmail.com",

      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
    {
      key: "2",
      serial: "#02",
      name: "Robert Fox",
      email: "email@gmail.com",

      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
    {
      key: "3",
      serial: "#01",
      name: "Robert Fox the min",
      email: "email@gmail.com",

      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
    {
      key: "4",
      serial: "#02",
      name: "Robert Fox",
      email: "email@gmail.com",

      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
  ];

  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Record<string, string>) => (
        <div className="name-cell">
          <Avatar src={record.avatar} size={32}>
            RF
          </Avatar>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="action-buttons">
          <Link to="/account-details/12">
            <EyeOutlined className="view-icon" />
          </Link>
          <UserDeleteOutlined
            onClick={() => setDeleteUser(true)}
            className="delete-icon"
          />
        </div>
      ),
    },
  ];


  return (
    <div className="user-table-container">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="custom-table"
      />
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
    </div>
  );
};


