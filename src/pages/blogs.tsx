import {Col, Input, Row } from "antd"
import { BlogCard } from "../components"
import { AddNews } from "../components/forms";
import React, { useState } from "react";
import { useGetAllBlogsQuery } from "../redux/api/blog.api";
import { LoaderCircle, Search } from "lucide-react";
import { BlogType } from "../types";
import EditBlog from "../components/cards/EditBlog";

export const Blog = () => {

    const [searchText, setSearchText] = useState("");

    const query: { searchTerm?: string } = {};

    if (searchText) {
        query["searchTerm"] = searchText;
    }

    const { isLoading, data, isSuccess } = useGetAllBlogsQuery(query)

    const [openModal, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<BlogType | null>(null);


    return (
        <div className="bg-[#fdfdfd] p-4 rounded">
            <div className="flex justify-between items-center py-8">
                <h4 className="tracking-tight font-extrabold text-xl">NEWS</h4>
                <AddNews />
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
                    <AllNews news={data?.data?.data} setModalOpen={setModalOpen} setSelectedItem={setSelectedItem} />
                </Row>
            }

            <EditBlog
                defaultData={selectedItem}
                onClose={() => setModalOpen(false)}
                open={openModal}
            />

        </div>
    )
}

const AllNews = React.memo(({ news, setSelectedItem, setModalOpen }: { news: BlogType[], setSelectedItem: React.Dispatch<React.SetStateAction<BlogType | null>>, setModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return news?.map(blog => {
        return (
            <Col key={blog?._id} className="gutter-row" span={24} sm={24} md={12} lg={8}>
                <BlogCard blog={blog} setSelectedItem={setSelectedItem} setModalOpen={setModalOpen} />
            </Col>
        )
    })
})