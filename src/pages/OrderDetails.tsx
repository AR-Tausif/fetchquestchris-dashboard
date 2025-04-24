import { Avatar, Button, Dropdown, Input, Tag, theme } from "antd";
import { useState } from "react";
import { EllipsisVertical, Search } from "lucide-react";
import { useEditOrderStatusMutation, useGetAllOrdersQuery } from "../redux/api/order.api";

export const OrderDetails = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState("");

    const query: { page: number, searchTerm?: string } = { page: currentPage };

    if (searchText) {
        query["searchTerm"] = searchText;
    }

    const { isLoading, data } = useGetAllOrdersQuery(query)

    const { token } = theme.useToken()

    // Style object
    const styles = {
        container: {
            display: "flex" as const,
            flexDirection: "column" as const,
            gap: "10px",
        },
        addButton: {
            background: token.colorPrimary,
            width: "100%",
            padding: "13px 30px",
            color: token.colorWhite,
            fontWeight: 600,
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            borderRadius: 8,
        },
        icon: {
            color: token.colorWhite,
            fontSize: token.fontSize * 2,
        },
        title: {
            fontWeight: 500,
            textAlign: "center" as const, // Explicitly declare textAlign type
            margin: "15px 0",
        },
        form: {
            maxWidth: "100%",
            display: "flex",
            gap: 16,
        },
        formItem: {
            width: "100%",
        },
        modalWidth: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
        },
    };


    return (
        <div style={styles.container}>
            <div>
                <div className="w-1/3 ml-auto pb-5">
                    <Input
                        placeholder="Search by address, contact, tranId"
                        prefix={<Search className="mr-2 text-black" size={20} />}
                        className="h-11 !border !rounded-lg !text-base"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            <OrderList isLoading={isLoading} data={data?.data?.data} setCurrentPage={setCurrentPage} currentPage={currentPage} meta={data?.meta} />
        </div>
    );
};


import { Pagination, Table, TableColumnsType } from "antd";
import { Image } from 'antd';
import moment from "moment";
import { meta, OrderProductType, OrderType } from "../types";
import { toast } from "react-toastify";

export const OrderList = ({ isLoading, data, setCurrentPage, currentPage, meta }: { isLoading: boolean, data: OrderType[] | undefined, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, currentPage: number, meta: meta | undefined }) => {

    const [postUpdate] = useEditOrderStatusMutation()

    const handleMenuClick = async (e: { key: string }, id: any) => {

        const status = e?.key == "1" ? "complete" : e?.key == "2" ? "cancel" : "pending"

        const loadingToast = toast.loading("loading...")
        try {
            await postUpdate({ id: id, body: { status: status } }).unwrap();

            toast.success(`Order status updated successfully`)

        } catch (err: any) {
            toast.error(err?.data?.message || "something went wrong, try again")
        } finally {
            toast.dismiss(loadingToast)
        }

    };

    const handleMenuClickWithArgs = (extraArg: any) => (e: any) => {
        handleMenuClick(e, extraArg);
    };

    const columns: TableColumnsType<OrderType> = [
        {
            title: "TranId",
            dataIndex: "tranId",
            align: "center",
        },
        {
            title: "Name",
            dataIndex: ["user", "name"],
            align: "center",
            render: (value, record) => {
                return (
                    <div className="name-cell">
                        <Avatar src={record?.user?.image} size={32}>
                            RF
                        </Avatar>
                        <span>{value}</span>
                    </div>
                )
            }
        },
        {
            title: "Phone",
            dataIndex: ["contact"],
            align: "center",
        },
        {
            title: "Address",
            dataIndex: ["address"],
            align: "center",
        },
        {
            title: "Total Price",
            dataIndex: "total_amount",
            align: "center",
            render: (value) => ("$ " + value),
        },
        {
            title: "Payment Status",
            dataIndex: "isPaid",
            align: "center",
            render: (value) => <Tag color={value ? "green" : "red"}>
                <p className="capitalize">{value ? "Paid" : "Unpaid"}</p>
            </Tag>,
        },
        {
            title: "Order Status",
            dataIndex: "status",
            align: "center",
            render: (value) => <Tag color={value == 'cancel' ? "red" : value == "pending" ? "cyan" : "green"}>
                <p className="capitalize">{value}</p>
            </Tag>,
        },
        {
            title: "Order Date",
            dataIndex: "createdAt",
            align: "center",
            render: (value) => moment(value).format('MMMM Do YYYY, h:mm a'),
        },
        {
            title: "Action",
            dataIndex: "status",
            align: "center",
            render: (status, record) => (
                <div style={styles.actionContainer}>
                    <Dropdown menu={{
                        items: status == "pending" ? [
                            {
                                label: 'Order Complete',
                                key: 1,
                            },
                            {
                                label: 'Order Cancel',
                                key: 2,
                            }
                        ] : status == "complete" ? [
                            {
                                label: 'Order Pending',
                                key: 3,
                            },
                            {
                                label: 'Order Cancel',
                                key: 2,
                            }
                        ] : [
                            {
                                label: 'Order Pending',
                                key: 3,
                            },
                            {
                                label: 'Order Complete',
                                key: 1,
                            }
                        ],
                        onClick: handleMenuClickWithArgs(record?._id)
                    }}>
                        <Button>
                            <EllipsisVertical size={15} />
                        </Button>
                    </Dropdown>

                </div>
            ),
        },
    ];

    const ExpandedRowRender = ({ data }: { data: OrderProductType[] }) => {

        return (
            <Table<OrderProductType>
                columns={expandColumns}
                dataSource={data}
                rowKey={(record) => record?._id}
                pagination={false}
            />
        )
    }


    const expandColumns: TableColumnsType<OrderProductType> = [
        {
            title: "Name",
            dataIndex: ["id", "name"],
        },
        {
            title: "Images",
            dataIndex: ["id", "images"],
            align: "center",
            render: (value) => (
                <div style={styles.imageContainer}>
                    <Image.PreviewGroup
                        items={value}
                    >
                        <Image
                            width={80}
                            src={value[0]}
                        />
                    </Image.PreviewGroup>
                </div>
            ),
        },
        {
            title: "Price",
            dataIndex: ["id", "price"],
            align: "center",
            render: (value) => ("$ " + value),
        },
        {
            title: "Quantity",
            dataIndex: ["quantity"],
            align: "center",
        },
    ];

    return (
        <>
            <Table<OrderType>
                columns={columns}
                loading={isLoading}
                dataSource={data}
                expandable={{
                    expandedRowRender: (record) => <ExpandedRowRender data={record?.products} />,
                    // rowExpandable: (record) => record?.description !== null,
                }}
                size="middle"
                style={styles.table}
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

