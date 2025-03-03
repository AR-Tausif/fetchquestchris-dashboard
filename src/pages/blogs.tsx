import { Col, Row } from "antd"
import { BlogCard } from "../components"
import React from "react";

export const Blog = () => {
    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
    
    return (
        <div>
            <h4>NEWS</h4>
            <Row gutter={[{ xs: 8, sm: 8, md: 8, lg: 8 }, { xs: 8, sm: 8, md: 8, lg: 8 }]}>
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
        </div>
    )
}