import  { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

export const BlogListsPagination = () => {
    const [current, setCurrent] = useState(3);

    const onChange: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return <Pagination current={current} onChange={onChange} total={50} style={{
        padding:"20px 0"
    }} />;
};
