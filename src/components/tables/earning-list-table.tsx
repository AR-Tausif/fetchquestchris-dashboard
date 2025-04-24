
import { Table, Select, Avatar, Modal } from "antd";
import { EyeOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DeleteActionButtons } from "../cards/delete-action-card";

import { earningData, IEarningData } from "../../types";

const { Option } = Select;

export const EarningListTable = () => {
  const [accountTypeFilter, setAccountTypeFilter] = useState("all");
  const [deleteUser, setDeleteUser] = useState(false);
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<IEarningData | null>(null);

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
          {/* <ProfileDetailsViewCard user={modalShowUser} isNoneClose /> */}
        </Modal>
      )}
    </div>
  );
};
