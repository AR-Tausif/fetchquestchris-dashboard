import { Form, Input, notification } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../primary-button";
import { useState } from "react";

export const SetPasswordForm = () => {
  const [form] = Form.useForm();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const handleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
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
  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="New Password"
          name="new_password"
          rules={[
            { message: "Please input the current new password of collection!" },
          ]}
        >
          <Input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleCurrentPassword()} />
            }
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          rules={[
            {
              message:
                "Please input the current confirm password of collection!",
            },
          ]}
        >
          <Input
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter Your Confirm Password"
            addonAfter={
              <EyeInvisibleOutlined onClick={() => handleShowNewPassword()} />
            }
          />
        </Form.Item>

        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Save Changes
        </PrimaryButton>
      </Form>
    </>
  );
};
