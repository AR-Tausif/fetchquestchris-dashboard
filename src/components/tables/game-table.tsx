import { Pagination, Popconfirm, Table, TableColumnsType, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import GameItemViewCard from "../cards/service-item-view-card";
import { GameType, meta } from "../../types";
import moment from "moment";
import { toast } from "react-toastify";
import { useDeleteGameMutation } from "../../redux/api/game.api";

export const GameListTable = ({ isLoading, data, setCurrentPage, currentPage, meta }: { isLoading: boolean, data: GameType[] | undefined, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, currentPage: number, meta: meta | undefined }) => {

  const [postDelete] = useDeleteGameMutation()

  const handleDeleteGame = async (id: string) => {
    const loadingToast = toast.loading("loading....");
    try {
      await postDelete({ id }).unwrap();
      toast.success("Game delete succesfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    } finally {
      toast.dismiss(loadingToast)
    }
  }

  const columns: TableColumnsType<GameType> = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
      render: (_, __, indx) => (indx + 1),
    },
    {
      title: "Game",
      dataIndex: "image",
      align: "center",
      render: (value) => (
        <div style={styles.imageContainer}>
          <img
            src={value}
            alt={"game image"}
            style={styles.image}
          />
        </div>
      ),
    },
    {
      title: "Game Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Website",
      dataIndex: "link",
      align: "center",
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   align: "center",
    //   render: (status) => (
    //     <div style={styles.statusContainer}>
    //       <div style={status == "Active" ? styles.statusActiveBadge : styles.statusInactiveBadge}>{status}</div>
    //     </div>
    //   ),
    // },
    {
      title: "Created",
      dataIndex: "createdAt",
      align: "center",
      render: (value) => moment(value).format("LL"),
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <div style={styles.actionContainer}>
          
            <GameItemViewCard defaultData={record} />


          <Popconfirm
            title={"Delete"}
            description={"Are you sure you want to delete this game?"}
            onConfirm={() => handleDeleteGame(record?._id)}
            okText={"Yes"}
            cancelText={"No"}
          >

            <Tooltip title={"Delete Game"}>
              <p style={styles.actionIcon}>
                <DeleteOutlined style={styles.iconDelete} />
              </p>
            </Tooltip>
          </Popconfirm>


        </div >
      ),
    },
  ];

  return (
    <>
      <Table<GameType>
        columns={columns}
        dataSource={data}
        loading={isLoading}
        size="middle"
        style={styles.table}
        rowKey={(data) => data?._id}
        footer={() => <div>
          <Pagination defaultCurrent={currentPage} total={meta?.total} pageSize={10} hideOnSinglePage align="end" showSizeChanger={false} onChange={(page) => setCurrentPage(page)} />
        </div>}
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
    fontSize: 16
  },
  statusInactiveBadge: {
    background: "#FE585814",
    padding: "2px 12px",
    borderRadius: "8px",
    border: "1px solid #FE5858",
    color: " #FE5858",
    fontSize: 16
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
