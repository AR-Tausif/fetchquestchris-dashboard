import { Table, Select, Avatar } from "antd";
import { EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { UserDetailsModal } from "../modals";

export const AccountDetailsTable = () => {
  const [deleteUser, setDeleteUser] = useState(false);
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<any | null>(null);

  const data = [
    {
      key: "1",
      serial: "#01",
      name: "Diana Doxy",
      email: "diana@gmail.com",

      date: "11 oct 2024",
      avatar:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      key: "2",
      serial: "#02",
      name: "Robert Fox",
      email: "robert.fox@gmail.com",

      date: "11 oct 2024",
      avatar:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      key: "3",
      serial: "#03",
      name: "Rian Bin Kashem",
      email: "rian.kashem@gmail.com",

      date: "11 oct 2024",
      avatar:
        "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-Thumbnail.jpg",
    },
    {
      key: "4",
      serial: "#04",
      name: "William Hanry",
      email: "bilgates.personal@gmail.com",

      date: "11 oct 2024",
      avatar:
        "https://www.shutterstock.com/image-photo/photo-beautiful-young-business-woman-260nw-1906641364.jpg",
    },
  ];

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
  // console.log(handleUserShow);

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
      render: (text: string, record: any) => (
        <div className="action-buttons">
          <EyeOutlined
            className="view-icon"
            onClick={() => handleUserShow({ text, record })}
          />

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

{
  /* <div style={styles.actionContainer}>
  <Link to="/account-details/12">
    <p style={styles.actionIcon}>
      <EyeInvisibleOutlined style={styles.icon} />
    </p>
  </Link>
  <p style={styles.actionIcon} onClick={() => setDeleteUser(true)}>
    <UserDeleteOutlined style={styles.deleteIcon} />
  </p>
</div> */
}
