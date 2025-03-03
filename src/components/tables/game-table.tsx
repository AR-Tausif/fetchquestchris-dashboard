import { Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { gameData, DataType } from "../../assets/data/data.account-details";
import { DeleteActionButtons } from "../cards/delete-action-card";
import GameItemViewCard from "../cards/service-item-view-card";

export const GameListTable = () => {
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
    },
    {
      title: "Game",
      dataIndex: "image",
      align: "center",
      render: (_text: string, record: DataType) => (
        <div style={styles.imageContainer}>
          <img
            src="https://s3-alpha-sig.figma.com/img/6b66/731b/360e0c3606af3f363e3650077dcced85?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nbc7p4PGHntpTAiSuMdv3cZUPTROOP3H0iu1PM60EOZbmHeIA67vXXWYpwyV-LBGWZr2YNyXcVzMVQlxv47QRdrPP0vlt3iabFhM9RfTQ41kMWA6laoIT3fMAcW-B7u8rqgohCkxmQ2lYihLCOQOlkZZ-p~TNMLDHTsqjh7IzEMoS4vvhaVPbeI8vG76bUtIU93DTjvdTp-IeEhQxa6KwtrTBOhHeqfKc~6fLq2muGl0tvRsznn1TtfrMopfdTAT9duxY4rwBs5MSnHstyUtyye-yevPvMUKsv4CAd0rL3e5yEoE~aZ2ODb5je7TN7z0L0LcUQqgU97cHo~8agJBDw__"
            alt={record.name}
            style={styles.image}
          />
        </div>
      ),
    },
    {
      title: "Game Name",
      dataIndex: "gamename",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <div style={styles.statusContainer}>
          <div style={status == "Active" ? styles.statusActiveBadge : styles.statusInactiveBadge}>{status}</div>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_text: string, _record: DataType) => (
        <div style={styles.actionContainer}>
          <p
            style={styles.actionIcon}
            onClick={() => setOpenAccountDetail(true)}
          >
            <EyeInvisibleOutlined style={styles.icon} />
          </p>
          <p style={styles.actionIcon} onClick={() => setDeleteUser(true)}>
            <UserDeleteOutlined style={styles.iconDelete} />
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={gameData}
        size="middle"
        style={styles.table}
      />
      <Modal
        centered
        open={openAccountDetail}
        onOk={() => setOpenAccountDetail(false)}
        onCancel={() => setOpenAccountDetail(false)}
        footer={null}
      >
        <GameItemViewCard />
      </Modal>
      <DeleteActionButtons
        open={deleteUser}
        onConfirm={() => setDeleteUser(false)}
        onCancel={() => setDeleteUser(false)}
      />
    </>
  );
};

// Style object
const styles = {
  table: {
    minHeight: "100vh",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: 100,
    border: "1px solid #CACACA",
  },
  statusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statusActiveBadge: {
    background: "#D6FEEB7D",
    padding: "2px 12px",
    borderRadius: "8px",
    border: "1px solid #498A6C",
    color: "#498A6C",
    fontSize:16
  },
  statusInactiveBadge: {
    background: "#FE585814",
    padding: "2px 12px",
    borderRadius: "8px",
    border: "1px solid #FE5858",
    color: " #FE5858",
    fontSize:16
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
    cursor: "pointer",
  },
  icon: {
    color: "#010101",
  },
  iconDelete: {
    color: "red",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#A011FF",
    textAlign: "center" as const,
  },
};
