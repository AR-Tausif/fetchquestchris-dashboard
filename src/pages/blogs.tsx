import { Button, Col, Modal, Row } from "antd"
import { BlogCard, BlogListsPagination } from "../components"
import { PlusOutlined } from "@ant-design/icons";
import { AddNews } from "../components/forms";
import { useState } from "react";

export const Blog = () => {
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
            <Row gutter={[8, 8]}>
                <Col className="gutter-row" span={24} sm={24} md={12} lg={8}>
                    <BlogCard />
                </Col>
                <Col className="gutter-row" span={24} sm={24} md={12} lg={8}>
                    <BlogCard />
                </Col>
                <Col className="gutter-row" span={24} sm={24} md={12} lg={8}>
                    <BlogCard />
                </Col>
                <Col className="gutter-row" span={24} sm={24} md={12} lg={8}>
                    <BlogCard />
                </Col>
                <Col className="gutter-row" span={24} sm={24} md={12} lg={8}>
                    <BlogCard />
                </Col>
                <Col className="gutter-row" span={24} sm={24} md={12} lg={8}>
                    <BlogCard />
                </Col>
            </Row>
            <Modal
                centered
                open={openResponsive}
                onOk={() => setOpenResponsive(false)}
                onCancel={() => setOpenResponsive(false)}
                width={{
                    xs: "90%",
                    sm: "80%",
                    md: "70%",
                    lg: "30%",
                    xl: "40%",
                    xxl: "40%",
                }}
                footer={null}
            >
                <AddNews />
            </Modal>
            <div className="flex justify-end">
                <BlogListsPagination />
            </div>
        </div>
    )
}