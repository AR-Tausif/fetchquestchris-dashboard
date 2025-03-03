import { Form, Input, notification } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { PrimaryButton } from "../primary-button";

export function CreateSubsPlanForm() {
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
  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Subscription Name"
          name="subscriptionName"
          rules={[{ message: "Please input the title of collection!" }]}
        >
          <Input placeholder="Enter Subscription Name" />
        </Form.Item>
        <Form.Item name="description" label="Short Description">
          <TextArea
            showCount
            maxLength={100}
            placeholder="Enter Details"
            style={{ height: 120, resize: "none" }}
          />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input addonAfter={<DollarOutlined />} placeholder="Enter Price" />
        </Form.Item>
        <PrimaryButton type="submit" styles={{ width: "100%" }}>
          Save
        </PrimaryButton>
      </Form>
    </>
  );
}
