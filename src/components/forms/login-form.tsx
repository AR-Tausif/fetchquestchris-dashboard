import React, { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  FormProps,
  Input,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { useLoginAdminMutation } from "../../redux/api/auth.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addUserDetails } from "../../redux/features/auth.slice";
import { LucideLoaderCircle } from "lucide-react";

type FieldType = {
  email: string,
  password: string
};

export const LoginForm: React.FC = () => {

  const [postLogin, {isLoading}] = useLoginAdminMutation();
  const navig = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [showPass, setShowPass] = useState(false);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

    try {

      const res = await postLogin(values)?.unwrap();

      dispatch(addUserDetails({
        name: res?.data?.user?.name,
        email: res?.data?.user?.email,
        image: res?.data?.user?.image,
        phoneNumber: res?.data?.user?.contact,
        accessToken: res?.data?.accessToken,
        refreshToken: res?.data?.refreshToken
      }))

      toast.success("Login successfully")
      navig('/')
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong, try again")
    }
  };

  const onCheckboxRememberChange: CheckboxProps["onChange"] = () => { };

  const handleShwingPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <Form
        name="basic"
        style={{ width: '100%' }}
        // initialValues={}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          name="email"
          label="Email"
          rules={[{ required: true, message: "password required" }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          label="Password"
          rules={[{ required: true, message: "password required" }]}
        >
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Enter your password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleShwingPassword()} />
            }
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Form.Item name="remember_me" rules={[{ type: "string", min: 4 }]}>
            <Checkbox onChange={onCheckboxRememberChange}>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Link to="/forgot-password">
              <p>Forgot Password</p>
            </Link>
          </Form.Item>
        </div>

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
    </>
  );
};
