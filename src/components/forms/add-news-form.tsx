import { Button, Form, FormProps, Input } from "antd";
import { CloudUpload, LucideLoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateBlogMutation } from "../../redux/api/blog.api";

type FieldType = {
    name: string,
    description: string,
};

export const AddNews: React.FC = () => {

    const [postCreate, { isLoading }] = useCreateBlogMutation();

    const [image, setImage] = useState<File | null>(null);

    const [antDform] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

        if (!image) {
            toast.error("Upload a Blog Thumbnail");
            return;
        }

        try {
            const form = new FormData();
            form.append('name', values?.name);
            form.append('description', values?.description);
            if (image) {
                form.append('image', image)
            }
            await postCreate({ body: form }).unwrap();
            toast.success("Blog Create succesfully");
            setImage(null)
            antDform.resetFields();
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong, try again")
        }
    };

    return (
        <Form
            name="basic"
            style={{ width: '100%' }}
            // initialValues={defaultData}
            onFinish={onFinish}
            form={antDform}
            autoComplete="off"
            layout="vertical">


            <div className="w-full">

                <label htmlFor="image">
                    <div
                        className="text-primary my-4 mb-8 flex h-20 w-full items-center justify-center rounded-lg border border-gray-400 hover:cursor-pointer"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <CloudUpload size={32} color="gray" />
                            <p className="font-semibold text-gray-500">Upload Thumbnail</p>
                        </div>
                    </div>
                </label>

                <input
                    type="file"
                    id="image"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            setImage(file);
                        }
                    }}
                />

                {(image) && <div
                    className="border-primary text-primary mt-3 flex w-full items-center justify-between border px-2 py-3 mb-3"
                >
                    <img
                        src={URL.createObjectURL(image)}
                        alt="logo"
                        className="mx-auto h-full max-h-10 w-auto rounded"
                    />
                    {/* <Trash2
              size={22}
              className="hover:cursor-pointer"
              onClick={() => setImage({})}
            /> */}
                </div>}

            </div>


            <Form.Item<FieldType>
                label="Blog title"
                name="name"
                rules={[
                    { required: true, message: 'Please input title' },
                ]}
            >
                <Input placeholder="Enter Blog title" />
            </Form.Item>

            <Form.Item<FieldType>
                label="Blog description"
                name="description"
                rules={[
                    { required: true, message: 'Please write some description' },
                ]}
            >
                <Input.TextArea placeholder="Write some description" autoSize={{ minRows: 3 }} />
            </Form.Item>

            <Form.Item>
                <Button
                    htmlType="submit"
                    type="primary"
                    block
                    icon={isLoading ? <LucideLoaderCircle className="animate-spin text-white" /> : <></>}
                >
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );

};
