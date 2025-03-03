// const columns: TableColumnsType<AccDetailsDataType> = [
//   { title: "Serial", dataIndex: "serial", align: "center" },
//   { title: "Name", dataIndex: "name", align: "center", render: renderName },
//   { title: "Subscription", dataIndex: "subscriptionType", align: "center" },
//   { title: "Purchase Date", dataIndex: "purchaseDate", align: "center" },
//   { title: "Amount", dataIndex: "amount", align: "center" },
//   {
//     title: "Action",
//     dataIndex: "action",
//     align: "center",
//     render: (text: string, record: AccDetailsDataType) =>
//       renderActions(text, record),
//   },
// ];
// console.log({ accountDetailData });

// // Render functions should be defined after usage in the columns array.
// function renderName(_text: string, record: AccDetailsDataType) {
//   return (
//     <div style={styles.flexCenter}>
//       <img
//         src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
//         alt={record.name}
//         style={styles.avatar}
//       />
//       <h4 style={styles.name}>{record.name}</h4>
//     </div>
//   );
// }

import { Table, Select, Avatar, Modal } from "antd";
import { EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DeleteActionButtons } from "../cards/delete-action-card";

import { ProfileDetailsViewCard } from "../cards";
import { earningData, IEarningData } from "../../types";

const { Option } = Select;

export const EarningListTable = () => {
  const [accountTypeFilter, setAccountTypeFilter] = useState("all");
  const [deleteUser, setDeleteUser] = useState(false);
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<IEarningData | null>(null);

  // const data: IEarningData[] = [
  //   {
  //     key: "1",
  //     serial: "#0",
  //     name: "Anna Suraiya",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "2",
  //     serial: "#1",
  //     name: "John Doe",
  //     subscriptionType: "Advance Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "3",
  //     serial: "#2",
  //     name: "Emma Stone",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "4",
  //     serial: "#3",
  //     name: "Sophia Green",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "5",
  //     serial: "#4",
  //     name: "James Brown",
  //     subscriptionType: "Advance Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "6",
  //     serial: "#5",
  //     name: "Chris Evans",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "7",
  //     serial: "#6",
  //     name: "Oliver Queen",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "8",
  //     serial: "#7",
  //     name: "Natalie Portman",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "9",
  //     serial: "#8",
  //     name: "Robert Downey",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  //   {
  //     key: "10",
  //     serial: "#9",
  //     name: "Liam Neeson",
  //     subscriptionType: "Basic Plan",
  //     purchaseDate: "2022-01-15",
  //     amount: 30,
  //   },
  // ];

  const handleUserShow = (userData: any) => {
    // console.log(userData.record, "sss");
    const users = earningData.find(
      (user: IEarningData) => user.key == userData.record.key
    );
    if (!users) {
      return;
    }
    setModalShowUser(users);
    setOpenAccountDetail(true);
    // console.log({ users, modalShowUser });
  };
  
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
      render: (value: string, record: any) => (
        <div className="name-cell">
          <Avatar src={record.avatars} size={32}>
            RF
          </Avatar>
          <span>{value}</span>
        </div>
      ),
    },
    {
      title: (
        <div className="account-type-header">
          <span>Subscription Type</span>
          <Select
            onChange={setAccountTypeFilter}
            className="account-type-filter"
          >
            <Option value="basic-plan">Basic Plan</Option>
            <Option value="advance-plan">Advance Plan</Option>
          </Select>
        </div>
      ),
      dataIndex: "subscriptionType",
      key: "subscriptionType",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (value: string, record: any,) => (
        <div className="action-buttons">
          <EyeOutlined
            className="view-icon"
            onClick={() => handleUserShow({ text: value, record })}
          />
          <UserDeleteOutlined
            onClick={() => setDeleteUser(true)}
            className="delete-icon"
          />
        </div>
      ),
    },
  ];
  
  const filteredData = earningData.filter((item) =>
    accountTypeFilter === "all"
      ? true
      : accountTypeFilter === "basic-plan"
      ? item.subscriptionType === "Basic Plan"
      : item.subscriptionType === "Advance Plan"
  );

  return (
    <div className="user-table-container">
      <Table
        columns={columns}
        dataSource={filteredData}
        // pagination={false}
        className="custom-table"
      />
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
      {openAccountDetail && modalShowUser && (
        <Modal
          centered
          open={openAccountDetail}
          onOk={() => setOpenAccountDetail(false)}
          onCancel={() => setOpenAccountDetail(false)}
          footer={null}
        >
          <ProfileDetailsViewCard user={modalShowUser} isNoneClose />
        </Modal>
      )}
    </div>
  );
};
