import { Table, Avatar, TableColumnsType, Pagination, Tooltip } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { UserDetailsModal } from "../modals";
import { IUserDetails, meta } from "../../types";
import moment from "moment";
import { toast } from "react-toastify";
import { useBlockUserMutation } from "../../redux/api/auth.api";
import { UserCheck, UserX } from "lucide-react";

export const AccountDetailsTable = ({ isLoading, data, setCurrentPage, currentPage, meta }: { isLoading: boolean, data: IUserDetails[] | undefined, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, currentPage: number, meta: meta | undefined }) => {

  const [postBlock] = useBlockUserMutation()

  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [modalShowUser, setModalShowUser] = useState<any | null>(null);

  const handleUserShow = (user: IUserDetails) => {

    setModalShowUser(user);
    setOpenAccountDetail(true);
  };

  const handleBlockUser = async (id: string, status: 1 | 0) => {
    const loadingToast = toast.loading("loading...")
    try {
     await postBlock({ id: id, updatedData: { status: status } }).unwrap();

      toast.success(`User ${status ? "Unblock" : "Block"} successfully`)

    } catch (err: any) {
      toast.error(err?.data?.message || "something went wrong, try again")
    } finally {
      toast.dismiss(loadingToast)
    }
  };

  const columns: TableColumnsType<IUserDetails> = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
      render: (_, __, indx) => (indx + 1)
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="name-cell">
          <Avatar src={record?.image} size={32}>
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
      title: "Joined Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => moment(value).format("LL"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="action-buttons">
          <EyeOutlined
            className="view-icon"
            onClick={() => handleUserShow(record)}
          />

          {/* <CSUserOffIcon
            className="delete-icon text-3xl border rounded-full p-0.5"
            onClick={() => setDeleteUser(true)}
          /> */}

          <Tooltip title={record?.status ? "Block user" : "Unblock user"}>
            <button onClick={() => handleBlockUser(record?._id, record?.status == 1 ? 0 : 1)} className="cursor-pointer">
              {record?.status ? <UserX color="#F16365" size={22} /> : <UserCheck color="#00ba15" size={22} />}
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];



  return (
    <div className="user-table-container">
      <Table<IUserDetails>
        columns={columns}
        loading={isLoading}
        dataSource={data}
        className="custom-table"
        rowKey={(data) => data?._id}
        footer={() => <div>
          <Pagination defaultCurrent={currentPage} total={meta?.total} pageSize={10} hideOnSinglePage align="end" showSizeChanger={false} onChange={(page) => setCurrentPage(page)} />
        </div>}
      />
      <UserDetailsModal
        open={openAccountDetail}
        onClose={() => setOpenAccountDetail(false)}
        user={modalShowUser}
      />

    </div>
  );
};
