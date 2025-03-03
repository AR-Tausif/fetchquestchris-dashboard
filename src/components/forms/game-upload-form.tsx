import React from "react";
import { Form, Input, message, notification, Select } from "antd";
import { Option } from "antd/es/mentions";
import { PrimaryButton } from "../primary-button";

export const ServiceUploadForm: React.FC = () => {
  const [form] = Form.useForm();
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
          name="game_name"
          label="Game Name"
          rules={[{ type: "string", min: 6 }]}
        >
          <Input placeholder="Enter Game Name" />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ message: "Please select status!" }]}
        >
          <Select placeholder="Select Service Status">
            <Option value="active">Active</Option>
            <Option value="inactive">In Active</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <PrimaryButton type="submit" styles={{ width: "100%", padding: 20 }}>
            Submit
          </PrimaryButton>
        </Form.Item>
      </Form>
    </>
  );
};
