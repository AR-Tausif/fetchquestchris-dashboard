import { Button, Input } from 'antd';
import { useState, ChangeEvent, FormEvent } from 'react';
const { TextArea } = Input;

export const AddNews = () => {
    const [value, setValue] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const handleFileOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            img: formData.get('image_took'),
            title: formData.get('news_title'),
            desc: formData.get('description')
        }
        console.log(data);
    }

    return (
        <div className="w-full p-5">
            <p className='text-center text-[#010101] font-semibold pb-4'>
                News Details
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-8">
                <div className="w-[90%] relative flex flex-col items-center justify-center h-30 border rounded-md border-[#AFAFAF]"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}>
                    <input
                        type="file"
                        name='image_took'
                        onChange={handleFileOnchange}
                        className='w-full h-full absolute bg-black opacity-0'
                        accept="image/*"
                    />
                    <h6 className="uppercase -tracking-wider font-bold text-[#AFAFAF]">Upload games</h6>
                </div>
                <Input placeholder='Title here' name='news_title' />
                <TextArea
                    name='description'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Description here"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
                <Button
                    className='uppercase font-bold w-full'
                    style={{
                        fontWeight: 800,
                        padding: 20,
                        background: "#DA5DA314"
                    }}
                    htmlType='submit'
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}