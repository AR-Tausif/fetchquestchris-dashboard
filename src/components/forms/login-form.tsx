import React, { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxProps,
  Form,
  Input,
  message,
  notification,
} from "antd";
import { Link } from "react-router-dom";
import { EyeInvisibleOutlined } from "@ant-design/icons";

export const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [showPass, setShowPass] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (data: Record<string, unknown>) => {
    const b = {
      ...data,
    };
    api.open({
      message: "Service Updated succesfully",
      description: (
        <pre>
          <code>{JSON.stringify(b)}.</code>
        </pre>
      ),
      duration: 2,
    });
  };
  const onFinish = (values: Record<string, unknown>) => {
    openNotification(values);
    // console.log("Received values of form: ", values);
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onCheckboxRememberChange: CheckboxProps["onChange"] = () => {};

  const handleShwingPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="Email or Username"
          rules={[{ type: "string", min: 3 }]}
        >
          <Input placeholder="Enter your email or username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ type: "string", min: 4 }]}
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
            type="primary"
            htmlType="submit"
            style={{ width: "100%", background: "#9D0DFE" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
