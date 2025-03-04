import { Modal, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { EyeInvisibleOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { productData, DataType } from "../../assets/data/data.account-details";
import { DeleteActionButtons } from "../cards/delete-action-card";
import { UpdateSubsPlanForm } from "../forms";

export const ProductListTable = () => {
    const [openAccountDetail, setOpenAccountDetail] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    const columns: TableColumnsType<DataType> = [
        {
            title: "Serial",
            dataIndex: "serial",
            align: "center",
        },
        {
            title: "Product",
            dataIndex: "image",
            align: "center",
            render: (_text: string, record: DataType) => (
                <div style={styles.imageContainer}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/961c/6322/c83d212d71d7cd3bf544506e3aa0f1eb?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xg5Rg16HnxddZEyntIbW8YgKZD8uPfWzTkLc5PbcjhKHxxSUs-VBAllVNoqwZO9210TqLJ4tx8Xn9KiNk6hISIIlrEOLFxpg9SRMl8HL60VD2FvR3wPSjz97gnr~yqh5UYXAlycOofN3KOLo0LkLtr16rqCLZQP2i-iM00lgcLs3eQxwpSVuaOqNam4erJud26c7pgA9vtgS5Gz~ILqjTKAq3bs2AGCBE9QEt1E5VJK2ubCS8pFhg5UBpwgV9kwsj75-j4~q3eHoL6x7uuguMy15BO4MBqAeEy8K5DU~2N48A4Nk82IAHU1dbHGFDj~6-ZWQczFPSwPp6~eeA8WXgQ__"
                        alt={record.name}
                        style={styles.image}
                    />
                </div>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            align: "center",
        },
        {
            title: "Status",
            dataIndex: "status",
            align: "center",
            render: (status) => (
                <div style={styles.statusContainer}>
                    <div style={status == "Sell" ? styles.statusActiveBadge : styles.statusInactiveBadge}>{status}</div>
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
                dataSource={productData}
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
                <UpdateSubsPlanForm/>
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
