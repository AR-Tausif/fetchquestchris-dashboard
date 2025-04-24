import { Button, Col, Input, Modal, Row } from "antd"
import { BlogCard } from "../components"
import { PlusOutlined } from "@ant-design/icons";
import { AddNews } from "../components/forms";
import { useState } from "react";
import { useGetAllBlogsQuery } from "../redux/api/blog.api";
import { LoaderCircle, Search } from "lucide-react";

export const Blog = () => {

    const [searchText, setSearchText] = useState("");

    const query: { searchTerm?: string } = {};

    if (searchText) {
        query["searchTerm"] = searchText;
    }

    const { isLoading, data, isSuccess } = useGetAllBlogsQuery(query)

    const [openResponsive, setOpenResponsive] = useState(false);

    return (
        <div className="bg-[#fdfdfd] p-4 rounded">
            <div className="flex justify-between items-center py-8">
                <h4 className="tracking-tight font-extrabold text-xl">NEWS</h4>
                <Button className="uppercase tracking-tight font-extrabold text-xl flex justify-between items-center gap-4 shadow-cyan-100 shadow-2xl border"
                    onClick={() => setOpenResponsive(true)}>
                    <p>Add News</p>
                    <PlusOutlined className="text-[10px]" />
                </Button>
            </div>

            <div className="w-1/3 ml-auto pb-5">
                <Input
                    placeholder="Search by name, description"
                    prefix={<Search className="mr-2 text-black" size={20} />}
                    className="h-11 !border !rounded-lg !text-base"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>


            {
                isLoading && <div className='min-h-40 flex items-center justify-center'>
                    <LoaderCircle color="#d95ea5" size={50} className="text-4xl text-[#da5da3] animate-spin" />
                </div>
            }

            {
                isSuccess && <Row gutter={[8, 8]}>
                    {
                        data?.data?.data?.map(blog => {
                            return (
                                <Col key={blog?._id} className="gutter-row" span={24} sm={24} md={12} lg={8}>
                                    <BlogCard blog={blog} />
                                </Col>
                            )
                        })
                    }
                </Row>
            }

            <Modal
                centered
                open={openResponsive}
                onOk={() => setOpenResponsive(false)}
                onCancel={() => setOpenResponsive(false)}
                // width={{
                //     xs: "90%",
                //     sm: "80%",
                //     md: "70%",
                //     lg: "30%",
                //     xl: "40%",
                //     xxl: "40%",
                // }}
                title="Create new Blog"
                footer={null}
            >
                <AddNews />
            </Modal>
            {/* <div className="flex justify-end">
                <BlogListsPagination />
            </div> */}
        </div>
    )
}