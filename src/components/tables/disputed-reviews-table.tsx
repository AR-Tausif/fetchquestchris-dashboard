import React, { useState } from "react";
import { Table, TableColumnsType } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { data } from "../../assets/data/data.account-details";
import { IUserDetails } from "../../types";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { UserDetailsModal } from "../modals";
import { Link } from "react-router-dom";
import { titleCase } from "../../utils";

export interface DisputedReviewDataType {
  key: React.Key;
  serial: string;
  reviewBy: string;
  provider: string;
  reason: string;
  status: string;
  action: string;
}
export const DisputedReviewsTable = () => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [modalShowUser] = useState<IUserDetails | null>(null);

  // const handleUserShow = (data:any) => {
  //   const user = userArray.find(
  //     (user, index) => index === Number(data.record.key)
  //   );
  //   if (user) {
  //     setModalShowUser(user);
  //     setOpenAccountDetail(true);
  //   }
  // };

  const columns: TableColumnsType<DisputedReviewDataType> = [
    { title: "Serial", dataIndex: "serial", align: "center" },
    {
      title: "Review by",
      dataIndex: "reviewBy",
      align: "center",
      render: renderName,
    },
    { title: "Privider", dataIndex: "provider", align: "center" },
    { title: "Reason", dataIndex: "reason", align: "center" },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text: string, _record) =>
        text.toLowerCase() == "approved" ? (
          <p style={{ fontWeight: 600, color: "#A011FF" }}>
            {titleCase(text)}{" "}
          </p>
        ) : (
          <p style={{ fontWeight: 600, color: "#F7B814" }}>
            {" "}
            {titleCase(text)}{" "}
          </p>
        ),
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: () => renderActions(),
    },
  ];

  return (
    <>
      <Table<DisputedReviewDataType>
        columns={columns}
        dataSource={data}
        size="middle"
        style={styles.table}
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
    </>
  );

  function renderName(_text: string, record: DisputedReviewDataType) {
    return (
      <div style={styles.flexCenter}>
        <img
          src="https://digitalreach.asia/wp-content/uploads/2021/11/placeholder-image.png"
          alt={record.provider}
          style={styles.avatar}
        />
        <h4 style={styles.name}>{record.provider}</h4>
      </div>
    );
  }

  function renderActions() {
    return (
      <div style={styles.actionContainer}>
        <Link to="/disputed-reviews/1">
          <p style={styles.actionIcon}>
            <EyeInvisibleOutlined style={styles.icon} />
          </p>
        </Link>
      </div>
    );
  }
};

// Styles
const styles = {
  table: {
    minHeight: "100vh",
  },
  flexCenter: {
    padding: "0 0 0 100px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    border: "1px solid #CACACA",
  },
  name: {
    marginLeft: 8,
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionIcon: {
    width: 24,
    height: 24,
    padding: 8,
    border: "1px solid #CACACA",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#010101",
  },
  deleteIcon: {
    color: "red",
  },
};
