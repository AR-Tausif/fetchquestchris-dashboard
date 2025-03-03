import { Table, Select, Avatar } from "antd";
import { EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteActionButtons } from "../cards/delete-action-card";

const { Option } = Select;

export const DashboardTable = () => {
  const [accountTypeFilter, setAccountTypeFilter] = useState("all");
  const [deleteUser, setDeleteUser] = useState(false);

  const data = [
    {
      key: "1",
      serial: "#01",
      name: "Robert Fox",
      email: "email@gmail.com",
      accountType: "Service Provider",
      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
    {
      key: "2",
      serial: "#02",
      name: "Robert Fox",
      email: "email@gmail.com",
      accountType: "User",
      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
    {
      key: "3",
      serial: "#01",
      name: "Robert Fox the min",
      email: "email@gmail.com",
      accountType: "Service Provider",
      date: "11 oct 2024",
      avatar: "/placeholder.svg",
    },
    {
      key: "4",
      serial: "#02",
      name: "Robert Fox",
      email: "email@gmail.com",
      accountType: "User",
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
      title: (
        <div className="account-type-header">
          <span>Account Type</span>
          <Select
            onChange={setAccountTypeFilter}
            className="account-type-filter"
          >
            <Option value="service-provider">Service Provider</Option>
            <Option value="user">User</Option>
          </Select>
        </div>
      ),
      dataIndex: "accountType",
      key: "accountType",
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

  const filteredData = data.filter((item) =>
    accountTypeFilter === "all"
      ? true
      : accountTypeFilter === "service-provider"
      ? item.accountType === "Service Provider"
      : item.accountType === "User"
  );

  return (
    <div className="user-table-container">
      <Table
        columns={columns}
        dataSource={filteredData}
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


