"use client";


import { Button, Form, FormProps, Input } from "antd";
import { ArrowLeft, LucideLoaderCircle } from "lucide-react";
import { useVerifyOtpMutation } from "../redux/api/auth.api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type FieldType = {
    otp: string,
};

export default function OtpVerifyPage() {

    const [postVerify, { isLoading }] = useVerifyOtpMutation();
    const navig = useNavigate();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const res = await postVerify({ otp: values?.otp }).unwrap();

            toast.success(res?.message || 'Verify successfully');

            navig('/set-password')

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    };

    return (
        <div className="px-6 py-8 bg-white shadow-xl">
            <Link
                to="/login"
                className="text-primary-red flex-center-start gap-x-2 font-medium hover:text-primary-red mb-4"
            >
                <ArrowLeft size={18} /> Back to login
            </Link>

            <section className="mb-8 space-y-2">
                <h4 className="text-3xl font-semibold">Verify OTP</h4>
                <p className="text-dark-gray">
                    Enter the otp that we&apos;ve sent to your email
                </p>
            </section>

            <Form<FieldType>
                name="basic"
                style={{ width: '100%' }}
                // initialValues={}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
            >

                <Form.Item<FieldType>
                    // label="Email"
                    name="otp"
                    rules={[{ required : true, message: "enter otp" }]}
                >
                    <Input.OTP size="large" />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="large"
                        block
                        icon={isLoading ? <LucideLoaderCircle className="animate-spin text-white !mt-1" /> : <></>}
                        iconPosition="end"
                    >
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
}
