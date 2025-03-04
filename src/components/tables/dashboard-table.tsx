import { Table, Avatar } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { CSUserOffIcon } from "../icons";
import { UserDetailsModal } from "../modals";

export const DashboardTable = () => {
  const [deleteUser, setDeleteUser] = useState(false);
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<any | null>(null);



  const handleUserShow = (userData: any) => {
    const users = data.find(
      (user: any) => user.key == userData.record.key
    );
    if (!users) {
      return;
    }
    setModalShowUser(users);
    setOpenAccountDetail(true);
    // console.log({ users, modalShowUser });
  };


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
      render: (text: any, record: any) => (
        <div className="action-buttons">

          <EyeOutlined className="view-icon" onClick={() => handleUserShow({ text, record })} />

          <CSUserOffIcon
            onClick={() => setDeleteUser(true)}
            className="delete-icon text-3xl border rounded-full p-0.5"
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

      <UserDetailsModal
        open={openAccountDetail}
        onClose={() => setOpenAccountDetail(false)}
        user={modalShowUser}
      />
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
    </div>
  );
};


