import { Button, Input, } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
export const AddNews = () => {
    const [value, setValue] = useState()
    return (
        <div className="w-full p-5">
            <p className='text-center text-[#010101] font-semibold pb-4'>
                News Details
            </p>
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="w-[90%] flex flex-col items-center justify-center h-30 border rounded-md border-[#AFAFAF]">
                <input type="file" className='' />
                    <h6 className="uppercase -tracking-wider font-bold text-[#AFAFAF]">Upload games</h6>
                    
                </div>
                <Input placeholder='Title here' />
                <TextArea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Descriptiton here"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
                <Button className='uppercase font-bold w-full' style={{
                    fontWeight:800,
                    padding:20,
                    background:"#DA5DA314"
                }}>
                    Submit
                </Button>
            </div>
        </div>
    )
}